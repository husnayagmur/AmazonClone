import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleShowMore,setSelectedProduct } from '../../redux/productSlice';
import styles from '../../Styles/productListStyles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Fontisto';
import { TextInput } from 'react-native-gesture-handler';
import BottomTabBar from '../Layout/BottomTabBar';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const ProductList = ({navigation}) => {
  const dispatch = useDispatch();
  const { bestsellers, showAll, featuredImages, multiPack, maximumValue, products, } = useSelector((state) => state.products);
  const imagesToShow = showAll ? bestsellers : bestsellers.slice(0, 6);
  const today = new Date();
  const day = today.getDate();
  const tomorrow = today.getDate() + 1;
  const month = today.toLocaleString('tr-TR', { month: 'long' });

  const handleProductPress = (item) => {
    // Tıklanan ürünü Redux store'a gönderiyoruz
    dispatch(setSelectedProduct(item));
    // Ürün detayına yönlendiriyoruz
    navigation.navigate('ProductDetail');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#50dcd9', '#55ddbb']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.gradientContainer, { paddingVertical: 5 }]}
      >
        <View style={styles.searchContainer2}>
          <View style={styles.searchContainer}>
            <Icon name="search" size={20} color="gray" style={styles.searchIcon} />
            <TextInput
              placeholder="Amazon.com.tr'de Ara"
              style={styles.input}
            />
            <Icon name="camera" size={20} color="gray" style={styles.cameraIcon} />
          </View>
        </View>
      </LinearGradient>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Öne Çıkan Kategoriler</Text>
          <View style={styles.imageGrid}>
            {imagesToShow.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => handleProductPress(item)}>
                <View key={index} style={styles.imageCardRound}>
                <Image source={item.image} style={styles.imageRound} />
                <Text style={styles.imageLabel}>{item.label}</Text>
              </View>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity onPress={() => dispatch(toggleShowMore())}>
            <Text style={styles.showMore}>
              {showAll ? 'Daha az gör' : 'Daha fazla gör'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Çok Satanlar</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.imageGrid}>
              {featuredImages.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => handleProductPress(item)}>
                <View key={index} style={styles.imageCardSquare}>
                  <Image source={item.image} style={styles.imageSquare} />
                  <Text style={styles.imageLabel} numberOfLines={1} ellipsizeMode="tail">
                    {item.label}
                  </Text>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Çoklu paket ve büyük boy ürünler</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.imageGrid}>
              {multiPack.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => handleProductPress(item)}>
                <View key={index} style={styles.imageCardSquare}>
                  <Image source={item.image} style={styles.imageSquare} />
                  <Text style={styles.imageLabel} numberOfLines={1} ellipsizeMode="tail">
                    {item.label}
                  </Text>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>En fazla 50 TL</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.imageGrid}>
              {maximumValue.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => handleProductPress(item)}>
                <View key={index} style={styles.imageCardSquare}>
                  <Image source={item.image} style={styles.imageSquare} />
                  <Text style={styles.imageLabel} numberOfLines={1} ellipsizeMode="tail">
                    {item.label}
                  </Text>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#ccc', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }}>
            <Text style={{ fontSize: 16, marginVertical: 5, paddingVertical: 5 }}>Gıda Ürünleri içinde 30 üzeri s...</Text>
            <Text style={{ fontSize: 16, color: '#007AFF' }}>Filtrele</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.imageFilterGrid}>
              {products.map((item, index) => (
                 <TouchableOpacity key={index} onPress={() => handleProductPress(item)}>
                <View key={index} style={styles.imageSquareFilter}>
                  <Image source={item.image} style={styles.imageFilterSquare} />
                  <View style={styles.imageLabelContainer} >
                    <Text style={[styles.imageLabel, { textAlign: 'left' }]}>
                      {item.label}
                    </Text>
                    <View style={styles.starContainer}>
                      <Text style={[{ paddingHorizontal: 5 }]}>{item.starCount}</Text>
                      <FontAwesomeIcon name="star" size={20} color="#f46e01" />
                      <FontAwesomeIcon name="star" size={20} color="#f46e01" />
                      <FontAwesomeIcon name="star" size={20} color="#f46e01" />
                      <FontAwesomeIcon name="star" size={20} color="#f46e01" />
                      <FontAwesomeIcon name="star-half" size={20} color="#f46e01" />
                      <Text style={[{ marginLeft: 10, fontSize: 16, color: '#0f4557' }]}>{item.rating}</Text>
                      <Text style={[{ paddingHorizontal: 5 }]}>{item.starText}</Text>
                    </View>
                    <Text style={[{ fontSize: 12 }]} >{item.salesInfo}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                    <Text style={[{ fontSize: 12 }]}>ÜCRETSİZ teslimat <Text style={[{ fontSize: 12, fontWeight: 'bold' }]}>{day} {month}</Text> ilk siparişinizde</Text>
                    <Text style={[{ fontSize: 12 }]}>veya en hızlı teslimat yarın<Text style={[{ fontSize: 12, fontWeight: 'bold' }]}>{tomorrow} {month}</Text></Text>
                  </View>
                </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      <View style={styles.height}></View>
      <BottomTabBar />
    </View>
  );
};

export default ProductList;
