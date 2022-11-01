import Images from 'assets/images';
import { Themes } from 'assets/themes';
import { StyledImage, StyledList, StyledText } from 'components/base';
import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScaledSheet } from 'react-native-size-matters';
import { dumpData } from 'utilities/staticData';

const HomeScreen: FunctionComponent = () => {
    const renderItem = ({ item }: any) => {
        return (
            <View key={item?.id} style={styles.viewItem}>
                <StyledText i18nText={item?.title} customStyle={styles.styleTitle} />
                <StyledImage source={item?.image} customStyle={styles.imageItem} />
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.viewHeader}>
                <StyledText i18nText="home.nameAccount" customStyle={styles.nameAcc} />
                <View style={styles.bgAvatar}>
                    <StyledImage source={Images.photo.avatar} customStyle={styles.imageAvatar} />
                </View>
            </View>

            {/* Main content */}
            <StyledList data={dumpData} renderItem={renderItem} contentContainerStyle={styles.contentContainerStyle} />
        </SafeAreaView>
    );
};

const styles = ScaledSheet.create({
    container: {},
    bgAvatar: {
        height: '50@ms',
        aspectRatio: 1,
        backgroundColor: Themes.COLORS.purpleWhite,
        borderRadius: '50@ms',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageAvatar: {
        height: '35@ms',
        aspectRatio: 1,
    },
    viewHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '16@ms',
    },
    nameAcc: {
        color: Themes.COLORS.purple,
        fontSize: '24@ms',
        fontWeight: 'bold',
    },
    imageItem: {
        width: '144@s',
        height: '108@vs',
    },
    viewItem: {
        flexDirection: 'row',
        backgroundColor: Themes.COLORS.purpleWhite,
        borderRadius: '12@ms',
        marginBottom: '16@vs',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '16@ms',
        paddingVertical: '14@vs',
    },
    contentContainerStyle: {
        paddingHorizontal: '16@s',
        paddingTop: '16@vs',
        paddingVertical: '16@vs',
    },
    styleTitle: {
        fontSize: '20@ms',
        fontWeight: 'bold',
        color: Themes.COLORS.purple,
    },
});

export default HomeScreen;
