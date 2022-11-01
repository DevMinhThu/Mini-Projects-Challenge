import React from 'react';
import { Platform, View, Image } from 'react-native';
import Metrics from 'assets/metrics';
import { StyledTouchable } from 'components/base';
import { Themes } from 'assets/themes';
import Size from 'assets/sizes';
import { ScaledSheet } from 'react-native-size-matters';

const StyledTabBar = ({ state, descriptors, navigation }: any) => {
    return (
        <View style={styles.tabContainer}>
            {state.routes.map((route: any, index: any) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <StyledTouchable
                        accessibilityRole="button"
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        key={route.key}
                        customStyle={[styles.tabButton]}
                    >
                        <Image
                            source={options?.icon}
                            style={[
                                styles.tabIcon,
                                { tintColor: isFocused ? Themes.COLORS.purple : Themes.COLORS.purpleThin },
                            ]}
                        />
                    </StyledTouchable>
                );
            })}
        </View>
    );
};

const styles = ScaledSheet.create({
    tabContainer: {
        flexDirection: 'row',
        marginBottom: Platform.OS === 'ios' ? Metrics.safeBottomPadding : 0,
        borderTopColor: '#DEE2E6',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        alignItems: 'center',
        height: '56@vs',
    },
    tabButton: {
        alignItems: 'center',
    },
    tabIcon: {
        height: '24@vs',
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    tabLabel: {
        paddingLeft: Size.PADDING.defaultTextPadding,
        textAlign: 'center',
    },
});

export default StyledTabBar;
