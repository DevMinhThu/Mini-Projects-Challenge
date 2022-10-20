import { Themes } from 'assets/themes';
import { StyledImage, StyledText, StyledTouchable } from 'components/base';
import { AUTHENTICATE_ROUTE } from 'navigation/config/routes';
import { navigate } from 'navigation/NavigationService';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { ScaledSheet } from 'react-native-size-matters';
import { slides } from 'utilities/staticData';

const SlideScreen = () => {
    const renderPagination = (activeIndex: number) => {
        return (
            <View style={styles.paginationContainer}>
                <SafeAreaView>
                    <View style={styles.paginationDots}>
                        {slides.length > 1 &&
                            slides.map((_, i) => (
                                <View
                                    key={i}
                                    style={[
                                        styles.dot,
                                        i === activeIndex
                                            ? { backgroundColor: Themes.COLORS.purple }
                                            : { backgroundColor: Themes.COLORS.purpleWhite },
                                    ]}
                                />
                            ))}
                    </View>
                </SafeAreaView>
            </View>
        );
    };

    const renderSlide = ({ item }: any) => {
        return (
            <View style={styles.slide}>
                <StyledImage source={item?.image} resizeMode="contain" customStyle={styles.imageSlide} />
                <View style={styles.containerContent}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                </View>
                <View style={styles.containerBtn}>
                    <StyledTouchable onPress={() => navigate(AUTHENTICATE_ROUTE.WELCOME_SCREEN)}>
                        <StyledText i18nText={'common.skipTour'} customStyle={styles.styleBtnOnboarding} />
                    </StyledTouchable>
                </View>
            </View>
        );
    };

    return (
        <AppIntroSlider
            renderItem={renderSlide}
            data={slides}
            renderPagination={renderPagination}
            contentContainerStyle={styles.contentContainerStyle}
        />
    );
};

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageSlide: {
        height: '345@ms',
        aspectRatio: 1,
    },
    slide: {
        flex: 1,
        alignItems: 'center',
        marginTop: '47@vs',
    },
    containerContent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50@vs',
    },
    title: {
        fontSize: '32@ms',
        marginVertical: '16@vs',
        fontWeight: 'bold',
        color: Themes.COLORS.purple,
    },
    text: {
        fontSize: '16@ms',
        color: Themes.COLORS.purpleThin,
        fontWeight: '500',
        textAlign: 'center',
        lineHeight: '26@vs',
    },
    paginationContainer: {
        position: 'absolute',
        top: '455@vs',
        left: '16@ms',
        right: '16@ms',
    },
    paginationDots: {
        height: 16,
        margin: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        height: '8@vs',
        aspectRatio: 1,
        borderRadius: 5,
        marginHorizontal: 4,
    },
    containerBtn: {
        marginTop: '35@vs',
    },
    styleBtnOnboarding: {
        color: Themes.COLORS.purpleThin,
        fontSize: '14@ms',
        fontWeight: '600',
    },
    contentContainerStyle: {
        paddingTop: '47@vs',
    },
});

export default SlideScreen;
