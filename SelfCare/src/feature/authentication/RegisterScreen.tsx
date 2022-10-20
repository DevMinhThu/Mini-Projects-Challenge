import { yupResolver } from '@hookform/resolvers/yup';
import Images from 'assets/images';
import { Themes } from 'assets/themes';
import { StyledButton, StyledIcon, StyledImage, StyledText, StyledTouchable } from 'components/base';
import StyledInputForm from 'components/base/StyledInputForm';
import { AUTHENTICATE_ROUTE } from 'navigation/config/routes';
import { navigate } from 'navigation/NavigationService';
import React, { FunctionComponent, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScaledSheet } from 'react-native-size-matters';
import yupValidate from 'utilities/yupValidate';
import * as yup from 'yup';

const RegisterScreen: FunctionComponent = () => {
    const { t } = useTranslation();
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    const emailRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);

    const registerSchema = yup.object().shape({
        fullName: yupValidate.fullName(),
        email: yupValidate.email(),
        password: yupValidate.password(),
    });

    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(registerSchema),
    });
    const {
        formState: { isValid },
        handleSubmit,
    } = form;

    const handleSignUp = async () => null;

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={styles.container}
            enableOnAndroid={true}
            showsVerticalScrollIndicator={false}
        >
            <SafeAreaView style={styles.body}>
                <View style={styles.containerTitle}>
                    <StyledText i18nText={'authen.register.subTitle'} customStyle={styles.subTitle} />
                    <StyledText i18nText={'authen.register.title'} customStyle={styles.mainTitle} />
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
                        name={'fullName'}
                        placeholder={t('authen.register.fullName')}
                        returnKeyType={'next'}
                        customStyle={styles.styleInput}
                        placeholderTextColor={Themes.COLORS.purpleThin}
                        onSubmitEditing={() => emailRef.current.focus()}
                    />
                    <StyledInputForm
                        name={'email'}
                        placeholder={t('authen.register.email')}
                        ref={emailRef}
                        keyboardType={'email-address'}
                        returnKeyType={'next'}
                        customStyle={styles.styleInput}
                        placeholderTextColor={Themes.COLORS.purpleThin}
                        onSubmitEditing={() => passwordRef.current.focus()}
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
                        onSubmitEditing={handleSubmit(handleSignUp)}
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
                    />
                </FormProvider>
                <View style={styles.viewForgotPasswordButton}>
                    <StyledTouchable onPress={() => null} customStyle={styles.forgotPasswordButton}>
                        <StyledText customStyle={styles.forgotPasswordText} i18nText="authen.register.forgotPassword" />
                    </StyledTouchable>
                </View>
                <StyledButton
                    onPress={handleSubmit(handleSignUp)}
                    title={'authen.register.title'}
                    customStyle={[styles.registerBtn, !isValid && { backgroundColor: 'lightgray' }]}
                    customStyleText={styles.styleTextBtn}
                    disabled={!isValid}
                />
                <View style={styles.viewHasAccount}>
                    <StyledText i18nText="authen.register.hasAccount" customStyle={styles.styleHasAccount} />
                    <StyledTouchable onPress={() => navigate(AUTHENTICATE_ROUTE.LOGIN)}>
                        <StyledText customStyle={styles.textLogin} i18nText="authen.login.buttonLogin" />
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
    registerBtn: {
        marginTop: '24@vs',
        width: '327@s',
        borderWidth: 0,
        paddingVertical: '12@vs',
        borderRadius: '8@ms',
        backgroundColor: Themes.COLORS.purple,
    },
    styleTextBtn: {
        fontSize: '16@ms',
        color: Themes.COLORS.white,
        fontWeight: '600',
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
    customPlaceHolder: {
        color: Themes.COLORS.purple,
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
    viewHasAccount: {
        marginTop: '24@vs',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLogin: {
        marginLeft: '5@vs',
        color: Themes.COLORS.purple,
    },
    styleHasAccount: {
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
});
export default RegisterScreen;
