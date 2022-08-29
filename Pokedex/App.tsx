import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Themes} from './src/assets/themes';
import Images from './src/assets/images';
import {ScaledSheet} from 'react-native-size-matters';
import IconTouchable from './src/components/common/IconTouchable';
import {home} from './src/assets/locates/vi';
import {detailPoke, getListPokemon} from './src/common/api/pokemon/pokemon';

interface IValuePokemon {
  name: string;
  url: string;
}

const App = () => {
  const [listPokemon, setListPokemon] = useState<string[]>([]);
  const [filteredDataSource, setFilteredDataSource] = useState<string[]>([]);
  const [textSearch, setTextSearch] = useState<string>('');

  useEffect(() => {
    handleGetListPokemon();
  }, []);

  const handleGetListPokemon = async () => {
    try {
      const res = await getListPokemon();
      res?.data?.results.forEach(async (valuePokemon: IValuePokemon) => {
        const poke = await detailPoke(valuePokemon?.name);
        setListPokemon(prev => [...prev, poke?.data]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity style={styles.containerItem}>
        <Text style={styles.namePoke}>{item?.name}</Text>
        <Image
          source={{uri: item?.sprites?.front_default}}
          style={styles.itemPokemon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  };

  const showViewMenu = () => {
    return (
      <View style={styles.viewMenu}>
        <IconTouchable iconImage={Images.icon.generation} />
        <IconTouchable
          iconImage={Images.icon.filter}
          imageStyle={styles.styleIconMenu}
        />
        <IconTouchable
          iconImage={Images.icon.sort}
          imageStyle={styles.styleIconMenu}
        />
      </View>
    );
  };

  const showTitle = () => {
    return (
      <View style={styles.viewTitle}>
        <Text style={styles.mainTitle}>{home.mainTitle}</Text>
        <Text style={styles.subTitle}>{home.subTitle}</Text>
      </View>
    );
  };

  const searchBar = () => {
    const handleSearch = (text: string) => {
      if (text) {
        const newData = listPokemon.filter((value: any) => {
          const itemData = value?.name
            ? value.name.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });

        setFilteredDataSource(newData);
        setTextSearch(text);
      } else {
        setFilteredDataSource(listPokemon);
        setTextSearch(text);
      }
    };

    return (
      <View style={styles.viewSearchBar}>
        <Image source={Images.icon.search} style={styles.iconSearch} />
        <TextInput
          value={textSearch}
          onChangeText={handleSearch}
          placeholder={home.placeholderSearch}
          placeholderTextColor={Themes.COLORS.grey}
          style={styles.styleInputSearch}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Images.photo.bg}
        resizeMode="contain"
        style={styles.image}>
        {showViewMenu()}
        {showTitle()}
        {searchBar()}
        <FlatList
          data={textSearch ? filteredDataSource : listPokemon}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item, index) => index}
          columnWrapperStyle={styles.styleColumnWrapper}
          style={styles.containerFlatList}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default App;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.COLORS.white,
  },
  image: {
    flex: 1,
    height: '160@vs',
    paddingHorizontal: '25@s',
  },
  viewMenu: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: '40@vs',
  },
  styleIconMenu: {
    marginLeft: '25@s',
  },
  viewTitle: {
    marginTop: '37.5@vs',
    marginBottom: '25@vs',
  },
  mainTitle: {
    fontSize: '32@ms',
    marginBottom: '10@vs',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: '16@ms',
    color: Themes.COLORS.grey,
  },
  viewSearchBar: {
    backgroundColor: Themes.COLORS.backgroundInput,
    paddingHorizontal: '25@s',
    paddingVertical: '20@vs',
    borderRadius: '10@ms',
    flexDirection: 'row',
    marginBottom: '35@vs',
  },
  styleInputSearch: {
    flex: 1,
  },
  iconSearch: {
    width: '16@ms',
    height: '16@ms',
    marginRight: '12@s',
  },
  containerItem: {
    backgroundColor: Themes.COLORS.backgroundColorItem,
    paddingVertical: '10@vs',
    paddingHorizontal: '10@s',
    borderRadius: '10@ms',
    marginBottom: '30@vs',
  },
  itemPokemon: {
    width: '130@ms',
    height: '130@ms',
  },
  containerFlatList: {
    flex: 1,
    flexDirection: 'column',
  },
  styleColumnWrapper: {
    justifyContent: 'space-between',
  },
  namePoke: {
    fontSize: '16@ms',
    fontWeight: 'bold',
  },
});
