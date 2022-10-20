import { Themes } from 'assets/themes';
import Images from 'assets/images';
import { StyledImage, StyledText, StyledTouchable } from 'components/base';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { navigate } from 'navigation/NavigationService';
import { AUTHENTICATE_ROUTE } from 'navigation/config/routes';

const WelcomeScreen = () => {
    const handleSignUp = () => {
        navigate(AUTHENTICATE_ROUTE.REGISTER);
    };
    const handleLogin = () => {
        navigate(AUTHENTICATE_ROUTE.LOGIN);
    };

    return (
        <SafeAreaView>
            <View style={styles.containerTitle}>
                <StyledText i18nText={'common.welcome'} customStyle={styles.titleWelcome} />
                <StyledText i18nText={'common.appName'} customStyle={styles.appName} />
            </View>
            <View style={styles.containerImage}>
                <StyledImage source={Images.photo.avatarLogin} resizeMode="contain" customStyle={styles.styleImage} />
            </View>
            <View style={styles.containerBtn}>
                <StyledTouchable customStyle={[styles.btnSignUp]} onPress={handleSignUp}>
                    <StyledText i18nText={'authen.register.title'} customStyle={[styles.titleBtnSignUp]} />
                </StyledTouchable>
                <StyledTouchable customStyle={[styles.btnLogin]} onPress={handleLogin}>
                    <StyledText i18nText={'authen.login.buttonLogin'} customStyle={[styles.titleBtnLogin]} />
                </StyledTouchable>
            </View>
        </SafeAreaView>
    );
};

const styles = ScaledSheet.create({
    containerTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '30@vs',
    },
    containerImage: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '46@vs',
    },
    containerBtn: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    styleImage: {
        height: '345@ms',
        aspectRatio: 1,
    },
    btnSignUp: {
        width: '335@s',
        backgroundColor: Themes.COLORS.purple,
        borderRadius: '8@ms',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '16@ms',
    },
    titleBtnSignUp: {
        color: Themes.COLORS.white,
        paddingVertical: '12@vs',
        fontSize: '14@ms',
        fontWeight: 'bold',
    },
    btnLogin: {
        width: '335@s',
        backgroundColor: Themes.COLORS.white,
        borderRadius: '8@ms',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '16@ms',
        borderWidth: 0.5,
    },
    titleBtnLogin: {
        color: Themes.COLORS.purple,
        paddingVertical: '12@vs',
        fontSize: '14@ms',
    },
    titleWelcome: {
        fontSize: '20@ms',
        color: Themes.COLORS.purple,
        fontWeight: 'bold',
    },
    appName: {
        fontSize: '32@ms',
        color: Themes.COLORS.purple,
        fontWeight: 'bold',
        marginTop: '5@vs',
    },
});

export default WelcomeScreen;
