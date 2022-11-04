import { Themes } from 'assets/themes';
import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';

const MakerQr = () => {
    const translateY = useRef(new Animated.Value(0)).current;

    const startMoving = () => {
        Animated.sequence([
            Animated.timing(translateY, {
                toValue: scale(220),
                duration: 2000,
                useNativeDriver: true,
            }),
            Animated.timing(translateY, {
                toValue: 0,
                duration: 2000,
                useNativeDriver: true,
            }),
        ]).start(event => {
            if (event.finished) {
                startMoving();
            }
        });
    };

    useEffect(() => {
        startMoving();
    }, []);

    return <Animated.View style={[styles.aimingView, { transform: [{ translateY }] }]} />;
};

const styles = ScaledSheet.create({
    aimingView: {
        position: 'absolute',
        width: '110%',
        height: '3@ms',
        borderRadius: '5@ms',
        backgroundColor: Themes.COLORS.purpleThin,
        marginTop: '10@s',
        alignSelf: 'center',
    },
});

export default MakerQr;
