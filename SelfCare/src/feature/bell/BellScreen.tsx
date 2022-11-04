import { View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import React from 'react';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { Themes } from 'assets/themes';

const BellScreen = () => {
    const URL = 'https://dzone.com/articles/everything-you-need-to-know-about-programming-and';

    return (
        <View style={styles.container}>
            <View style={styles.QRCodeView}>
                <QRCode value={JSON.stringify(URL)} size={scale(194)} />
            </View>
        </View>
    );
};

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    QRCodeView: {
        width: '250@s',
        height: '250@s',
        borderRadius: '20@ms',
        backgroundColor: Themes.COLORS.white,
        marginTop: '40@vs',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default BellScreen;
