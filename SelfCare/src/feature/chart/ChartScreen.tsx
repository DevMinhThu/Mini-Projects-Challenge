import Images from 'assets/images';
import { Themes } from 'assets/themes';
import { StyledIcon, StyledImage, StyledText, StyledTouchable } from 'components/base';
import React, { FunctionComponent } from 'react';
import { Platform, View } from 'react-native';
import { RNCamera as Camera } from 'react-native-camera';
import { openSettings } from 'react-native-permissions';
import { ScaledSheet } from 'react-native-size-matters';
import { logger } from 'utilities/helper';
import ImageUploaded from 'utilities/upload/ImageUploader';
import MakerQr from './components/MakerQr';

const ChartScreen: FunctionComponent = () => {
    const NotAuthorizedView = () => {
        return (
            <View style={styles.notAuthorizedView}>
                <StyledText
                    i18nText="qr.goToSetting"
                    customStyle={styles.textGoToSetting}
                    onPress={() => openSettings().catch(() => logger('cannot open settings', true))}
                />
                <StyledText i18nText="qr.openPermissionCamera" customStyle={styles.textOpenPermission} />
            </View>
        );
    };

    const onScanSuccess = (event: any) => {
        console.log('event', event);
    };

    const BackgroundAiming = () => {
        return (
            <View style={styles.aimingView}>
                <StyledImage source={Images.icons.aiming} customStyle={styles.imgAiming} />
            </View>
        );
    };

    const QRCode = () => {
        return (
            <View style={styles.qrScanBox}>
                <View style={styles.qrScanTouch}>
                    <Camera
                        style={styles.qrScanCamera}
                        captureAudio={false}
                        onBarCodeRead={onScanSuccess}
                        notAuthorizedView={NotAuthorizedView()}
                        onStatusChange={e => console.log('event is: ', e)}
                    >
                        <MakerQr />
                    </Camera>
                </View>
            </View>
        );
    };

    const onChooseFromLibrary = async () => {
        await ImageUploaded.pickImage(1);
    };

    const ChooseFromLibrary = () => {
        return (
            <StyledTouchable customStyle={styles.chooseFromLibView} onPress={onChooseFromLibrary}>
                <StyledIcon source={Images.icons.gallery} size={25} customStyle={styles.iconGallery} />
                <StyledText i18nText="qr.chooseFromLib" customStyle={styles.textChooseFromLib} />
            </StyledTouchable>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.qrScanView}>
                {BackgroundAiming()}
                {QRCode()}
            </View>

            {ChooseFromLibrary()}
        </View>
    );
};
const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Themes.COLORS.white,
    },
    qrScanView: {
        width: '250@s',
        height: '250@s',
    },
    aimingView: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgAiming: {
        width: '280@s',
        height: '280@s',
        position: 'absolute',
        tintColor: Themes.COLORS.purpleThin,
    },
    qrScanBox: {
        width: '250@s',
        height: '250@s',
    },
    qrScanTouch: {
        flex: 1,
        borderRadius: '10@s',
        overflow: 'hidden',
        backgroundColor: Themes.COLORS.white,
    },
    qrScanCamera: {
        width: '250@s',
        height: '250@s',
    },
    notAuthorizedView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textGoToSetting: {
        fontSize: '16@ms',
        color: Themes.COLORS.textPrimary,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    textOpenPermission: {
        fontSize: '14@ms',
        color: Themes.COLORS.textPrimary,
        marginTop: '10@vs',
    },
    chooseFromLibView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '50@vs',
    },
    textChooseFromLib: {
        fontSize: '14@ms',
        fontWeight: Platform.select({
            ios: '700',
            android: 'bold',
        }),
        color: Themes.COLORS.purple,
        marginLeft: '10@s',
    },
    iconGallery: {
        tintColor: Themes.COLORS.purple,
    },
});
export default ChartScreen;
