import { yupResolver } from '@hookform/resolvers/yup';
import Images from 'assets/images';
import { Themes } from 'assets/themes';
import { StyledButton, StyledIcon, StyledImage, StyledInputForm, StyledText, StyledTouchable } from 'components/base';
import StyledOverlayLoading from 'components/base/StyledOverlayLoading';
import { AUTHENTICATE_ROUTE } from 'navigation/config/routes';
import { navigate } from 'navigation/NavigationService';
import React, { FunctionComponent, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScaledSheet } from 'react-native-size-matters';
import { useLogin } from 'utilities/authenticate/AuthenticateService';
import yupValidate from 'utilities/yupValidate';
import * as yup from 'yup';

const DEFAULT_FORM: any = {
    email: 'hoan.nguyen@amela.vn',
    password: '123123123',
};

const LoginScreen: FunctionComponent = () => {
    const { t } = useTranslation();
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    const passwordRef = useRef<any>(null);
    const { requestLogin, loading } = useLogin();

    const yupSchema = yup.object().shape({
        email: yupValidate.email(),
        password: yupValidate.password(),
    });
    const form = useForm({
        mode: 'onChange', // validate form onChange
        defaultValues: DEFAULT_FORM,
        resolver: yupResolver(yupSchema),
        reValidateMode: 'onChange',
        criteriaMode: 'firstError', // first error from each field will be gathered.
    });
    const {
        formState: { isValid },
        handleSubmit,
    } = form;

    const doRegister = () => {
        navigate(AUTHENTICATE_ROUTE.REGISTER);
    };
    const goToForgotPassword = () => {
        navigate(AUTHENTICATE_ROUTE.FORGOT_PASS);
    };

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled"
            enableOnAndroid={true}
            showsVerticalScrollIndicator={false}
            enableResetScrollToCoords={false}
        >
            <StyledOverlayLoading visible={loading} />
            <SafeAreaView style={styles.body}>
                <View style={styles.containerTitle}>
                    <StyledText i18nText={'authen.login.subTitle'} customStyle={styles.subTitle} />
                    <StyledText i18nText={'authen.login.buttonLogin'} customStyle={styles.mainTitle} />
                </View>

                <View style={styles.containerImage}>
                    <StyledImage
                        source={Images.photo.avatarLogin}
                        resizeMode="contain"
                        customStyle={styles.styleImage}
                    />
                </View>

                <FormProvider {...form}>
                    <StyledInputForm
                        name="email"
                        customPlaceHolder="authen.login.email"
                        keyboardType="email-address"
                        maxLength={32}
                        customStyle={styles.styleInput}
                        placeholderTextColor={Themes.COLORS.purpleThin}
                        onSubmitEditing={() => passwordRef.current.focus()}
                        customErrorStyle={styles.customErrorStyle}
                    />
                    <StyledInputForm
                        name={'password'}
                        placeholder={t('authen.register.password')}
                        ref={passwordRef}
                        secureTextEntry={isSecureEntry}
                        returnKeyType={'next'}
                        maxLength={8}
                        customStyle={styles.styleInput}
                        placeholderTextColor={Themes.COLORS.purpleThin}
                        onSubmitEditing={handleSubmit(requestLogin)}
                        renderRight={() => (
                            <StyledTouchable
                                customStyle={styles.viewIcon}
                                onPress={() => setIsSecureEntry(!isSecureEntry)}
                            >
                                <StyledIcon
                                    customStyle={styles.styleIcon}
                                    source={isSecureEntry ? Images.icons.eyeOff : Images.icons.eye}
                                    size={10}
                                />
                            </StyledTouchable>
                        )}
                        customErrorStyle={styles.customErrorStyle}
                    />
                </FormProvider>
                <View style={styles.viewForgotPasswordButton}>
                    <StyledTouchable onPress={goToForgotPassword} customStyle={styles.forgotPasswordButton}>
                        <StyledText customStyle={styles.forgotPasswordText} i18nText="authen.register.forgotPassword" />
                    </StyledTouchable>
                </View>
                <StyledButton
                    onPress={handleSubmit(requestLogin)}
                    title="authen.login.buttonLogin"
                    disabled={!isValid}
                    customStyleText={styles.styleTextBtn}
                    customStyle={[styles.loginButton, !isValid && { backgroundColor: 'lightgray' }]}
                />
                <View style={styles.viewNotAccount}>
                    <StyledText i18nText="authen.register.notAccount" customStyle={styles.styleNotAccount} />
                    <StyledTouchable onPress={doRegister}>
                        <StyledText customStyle={styles.textSignUp} i18nText="authen.register.title" />
                    </StyledTouchable>
                </View>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    );
};

const styles = ScaledSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        alignItems: 'center',
    },
    loginButton: {
        marginTop: '24@vs',
        width: '327@s',
        borderWidth: 0,
        paddingVertical: '12@vs',
        borderRadius: '8@ms',
        backgroundColor: Themes.COLORS.purple,
    },
    registerButton: {
        marginTop: 20,
    },
    errorMessage: {
        color: Themes.COLORS.borderInputError,
    },
    containerTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '24@vs',
    },
    subTitle: {
        fontSize: '20@ms',
        color: Themes.COLORS.purple,
        fontWeight: '600',
    },
    mainTitle: {
        fontSize: '32@ms',
        color: Themes.COLORS.purple,
        fontWeight: 'bold',
        marginTop: '5@vs',
    },
    containerImage: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    styleImage: {
        height: '280@ms',
        aspectRatio: 1,
    },
    styleInput: {
        paddingVertical: '15@vs',
        paddingLeft: '20@ms',
        borderWidth: '0.5@ms',
        borderColor: Themes.COLORS.purpleThin,
        backgroundColor: Themes.COLORS.white,
        borderRadius: '8@ms',
        width: '327@s',
        color: Themes.COLORS.purpleThin,
    },
    viewIcon: {
        justifyContent: 'center',
    },
    styleIcon: {
        padding: '10@s',
        marginRight: '13@s',
        tintColor: Themes.COLORS.purpleThin,
    },
    styleTextBtn: {
        fontSize: '16@ms',
        color: Themes.COLORS.white,
        fontWeight: '600',
    },
    viewForgotPasswordButton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '327@s',
    },
    forgotPasswordButton: {
        marginTop: '10@vs',
        borderBottomColor: Themes.COLORS.black,
    },
    forgotPasswordText: {
        textAlign: 'center',
        lineHeight: '20.27@vs',
        marginBottom: '-1.5@vs',
        color: Themes.COLORS.purple,
    },
    viewNotAccount: {
        marginTop: '24@vs',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textSignUp: {
        marginLeft: '5@vs',
        color: Themes.COLORS.purple,
    },
    styleNotAccount: {
        color: Themes.COLORS.purpleThin,
    },
    customErrorStyle: {
        marginTop: '5@vs',
    },
});

export default LoginScreen;
