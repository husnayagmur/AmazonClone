import React from 'react';
import styles from '../../Styles/cartStyles'
import Icon from 'react-native-vector-icons/FontAwesome'; 
import {View,Text,Image,StyleSheet,Dimensions,TouchableOpacity,ScrollView,FlatList, Button,
} from 'react-native';
const data = [
  {
    id: '1',
    title: 'Apple Yenilenmiş iPhone 13 128 GB Pembe Cep Telefonu (12 Ay Garantili)',
    image: require('../../assets/cart/iphone4.jpg'),
    price: '12.999,99 TL',
    rating: 545
  },
  {
    id: '2',
    title: 'Apple Yenilenmiş iPhone 13 128 GB Pembe Cep Telefonu (12 Ay Garantili)',
    image: require('../../assets/cart/iphone2.jpg'),
    price: '12.499,99 TL',
    rating: 787
  },
  {
    id: '3',
    title: 'İphone 18W/20W Uyumlu Şarj Aleti Kılıfı, Adaptör Ve Kablo Koruyucu Küçük Pembe Kalpler Figürlü',
    image: require('../../assets/cart/kabloAksesuar.png'),
    price: '249,99 TL',
    rating: 1200
  },
  {
    id: '4',
    title: 'Apple Yenilenmiş iPhone 13 128 GB Pembe Cep Telefonu (12 Ay Garantili)',
    image: require('../../assets/cart/iphone3.jpg'),
    price: '13.499,99 TL',
    rating: 555
  },
  {
    id: '5',
    title: 'Apple AirPods 4',
    image: require('../../assets/cart/airpods.jpg'),
    price: '999,99 TL',
    rating: 621
  },
  {
    id: '6',
    title: 'Iphone 16 Pro Max & 16 Pro Taşlı Kamera Koruyucu Premium Görünüm Ve Kalite Netliği Korur Taşlı Siyah',
    image: require('../../assets/cart/kameraKoruyucu.jpg'),
    price: '159,99 TL',
    rating: 963
  },
  {
    id: '7',
    title: 'By Deji Iphone 8 X Xs Xr 11 12 13 14 Pro Max Plus Uyumlu Hızlı Şarj Kablosu Type C To Lightning',
    image: require('../../assets/cart/sarjKablosu.jpg'),
    price: '89,99 TL',
    rating: 254
  },
  {
    id: '8',
    title: 'Apple Yenilenmiş iPhone 13 128 GB Pembe Cep Telefonu (12 Ay Garantili)',
    image: require('../../assets/cart/tlfKılıf.jpg'),
    price: '299,99 TL',
    rating: 1455
  },
];

const Cart = () => {
  return (
    <View style={styles.cartContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.emptyCartBox}>
          <Image
            source={require('../../assets/cart/shopping.png')}
            style={styles.emptyCartImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.emptyCartTitle}>Amazon Sepetiniz boş</Text>
            <Text style={styles.emptyCartSubtitle}>Kaldığınız yerden devam edin</Text>
          </View>
        </View>

        <View style={styles.recommendationContainer}>
          <View style={styles.recommendation}>
            <Text style={styles.CartTitle}>Sizin İçin En İyi Ürünler</Text>
          </View>

          {/* Yatay Kaydırma için FlatList */}
          <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.productBox}>
                <Image source={item.image} style={styles.productImage} />
                <Text style={styles.recommendationTitle} numberOfLines={2} ellipsizeMode="tail">
                  {item.title}
                </Text>
                <Text style={styles.productPrice}>{item.price}</Text>
                <View style={styles.starContainer}>
                  <Icon name="star" size={20} color="#f46e01" />
                  <Icon name="star" size={20} color="#f46e01" />
                  <Icon name="star" size={20} color="#f46e01" />
                  <Icon name="star" size={20} color="#f46e01" />
                  <Icon name="star-half" size={20} color="#f46e01" />
                  <Text style={[ { marginLeft: 10, fontSize: 16,  color: '#0f4557',}]}>
                    {item.rating}
                  </Text>
                </View>
                <TouchableOpacity style={styles.addToCard}>
                  <Text style={styles.thinText}>Sepete Ekle</Text>
                </TouchableOpacity>
              </View>
            )}
            contentContainerStyle={styles.productContainer}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.recommendationContainer}>
          <View style={styles.recommendation}>
            <Text style={styles.CartTitle}>
              En son satın aldığınız ürünleri satın alan müşterilerimizin aldığı diğer ürünler
            </Text>
          </View>
          <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.productBox}>
                <Image source={item.image} style={styles.productImage} />
                <Text style={styles.recommendationTitle} numberOfLines={2} ellipsizeMode="tail">
                  {item.title}
                </Text>
                <Text style={styles.productPrice}>{item.price}</Text>
                <View style={styles.starContainer}>
                  <Icon name="star" size={20} color="#f46e01" />
                  <Icon name="star" size={20} color="#f46e01" />
                  <Icon name="star" size={20} color="#f46e01" />
                  <Icon name="star" size={20} color="#f46e01" />
                  <Icon name="star-half" size={20} color="#f46e01" />
                  <Text style={[ { marginLeft: 10, fontSize: 16,  color: '#0f4557',}]}>
                    {item.rating}
                  </Text>
                </View>
                <TouchableOpacity style={styles.addToCard}>
                  <Text style={styles.thinText}>Sepete Ekle</Text>
                </TouchableOpacity>
              </View>
            )}
            contentContainerStyle={styles.productContainer}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>

      <View style={styles.bottomButtonWrapper}>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.thinText}>Alışverişe devam et</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default Cart;

