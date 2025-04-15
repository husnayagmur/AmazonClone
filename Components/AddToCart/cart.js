import React from 'react';
import styles from '../../Styles/cartStyles';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/Fontisto';
import data from '../../data/cartData';

import {
  View, Text, Image, TouchableOpacity, ScrollView, FlatList, TextInput,
} from 'react-native';
import BottomTabBar from '../Layout/BottomTabBar';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../../redux/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <View style={styles.cartContainer}>
      <LinearGradient
        colors={['#50dcd9', '#55ddbb']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.gradientContainer, { paddingVertical: 5 }]}
      >
        <View style={styles.searchContainer2}>
          <View style={styles.searchContainer}>
            <FontistoIcon name="search" size={20} color="gray" style={styles.searchIcon} />
            <TextInput
              placeholder="Amazon.com.tr'de Ara"
              style={styles.input}
            />
            <FontistoIcon name="camera" size={20} color="gray" style={styles.cameraIcon} />
          </View>
        </View>
      </LinearGradient>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {cartItems.length === 0 ? (
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
        ) :
          <View style={styles.recommendationContainerAddToCart}>
            <View style={styles.recommendationAddToCart}>
              <Text style={{ fontSize: 20 }}>
                Ara Toplam{' '}
                <Text style={{ fontWeight: 'bold' }}>
                  {cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(4)} TL
                </Text>
              </Text>
              <View style={{ marginTop: 5 }}>
                <Text style={[{ color: '#166938' }, styles.cartDescription]}>
                  Siparişiniz <Text style={{ fontWeight: 'bold' }}>Kargo BEDAVA</Text> kapsamındadır.
                </Text>
                <Text style={[styles.cartDescription, { color: '#393c3d' }]}>
                  Alışverişi tamamlama adımında bu seçeneği seçin.
                </Text>
                <Text style={[{ color: '#2b5064' }, styles.cartDescription]}>
                  Ayrıntılar
                </Text>
              </View>
              <TouchableOpacity style={[styles.continueButton, { marginTop: 16 }]}>
                <Text style={styles.thinText}>
                  Alışverişi tamamla ({cartItems.length} ürün)
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleClearCart} style={{ paddingHorizontal: 10, paddingVertical: 6 }}>
              <Text style={{ color: '#2b5064', fontSize: 18 }}>Tüm ürünlerin seçimini kaldır</Text>
            </TouchableOpacity>
            <FlatList
              data={cartItems}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.productBoxCart}>
                  <View>
                    <Image source={item.image} style={styles.productImageCart} />
                    <View
                      style={{
                        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 2, borderColor: '#ebbe1e', borderRadius: 50, padding: 5, marginVertical:10, width: 120,
                      }}
                    >
                      <TouchableOpacity>
                        <Icon name="trash-bin-outline" size={20} color="#393c3d" />
                      </TouchableOpacity>
                      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#393c3d' }}>1</Text>
                      <TouchableOpacity>
                        <Icon name="add-outline" size={20} color="#393c3d" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.cartTextContainer}>
                    <Text style={styles.recommendationTitleCart} numberOfLines={2} ellipsizeMode="tail">
                      {item.title}
                    </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{item.price}</Text>
                    <Text style={{ color: '#393c3d', fontSize: 17 }}>Kargo Bedava Kapsamında</Text>
                    <Text style={{ color: '#2b5064', fontSize: 16 }}>Stokta var</Text>
                    <Text style={styles.productPrice}>{item.price}</Text>
                    <View style={styles.actionButtonsContainer}>
                      <TouchableOpacity onPress={() => handleRemoveFromCart(item)} style={styles.actionButtons}>
                        <Text style={[styles.thinText, { color: '#393c3d', fontSize: 14 }]}>Sil</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleRemoveFromCart(item)} style={styles.actionButtons}>
                        <Text style={[styles.thinText, { color: '#393c3d', fontSize: 14 }]}>Daha sonrası için kaydet</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )}
              contentContainerStyle={styles.productContainerColumn}
              scrollEnabled={false}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 5 }}>
                  Kolayca iade edebilirsiniz
                </Text>
                <Text style={{ color: '#393c3d', fontSize: 16 }}>
                  Milyonlarca üründe 30 gün içinde iade hakkı
                </Text>
              </View>
              <Image
                source={require('../../assets/cart/iade.png')}
                style={{ width: 60, height: 60, marginRight: 10 }}
              />
            </View>
          </View>
        }
        {/* Önerilen Ürünler */}
        <View style={styles.recommendationContainer}>
          <View style={styles.recommendation}>
            <Text style={styles.CartTitle}>Sizin İçin En İyi Ürünler</Text>
          </View>
          <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.productBox}>
                <Image source={item.image} style={styles.productImage} />
                <Text style={styles.recommendationTitle} numberOfLines={2} ellipsizeMode="tail">
                  {item.title}
                </Text>
                <Text style={styles.productPrice}>{item.price}</Text>
                <View style={styles.starContainer}>
                  <FontAwesomeIcon name="star" size={20} color="#f46e01" />
                  <FontAwesomeIcon name="star" size={20} color="#f46e01" />
                  <FontAwesomeIcon name="star" size={20} color="#f46e01" />
                  <FontAwesomeIcon name="star" size={20} color="#f46e01" />
                  <FontAwesomeIcon name="star-half" size={20} color="#f46e01" />
                  <Text style={[{ marginLeft: 10, fontSize: 16, color: '#0f4557' }]}>{item.rating}</Text>
                </View>
                <TouchableOpacity onPress={() => handleAddToCart(item)} style={styles.addToCard}>
                  <Text style={styles.thinText}>Sepete Ekle</Text>
                </TouchableOpacity>
              </View>
            )}
            contentContainerStyle={styles.productContainer}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/* En Son Satın Alınanlar */}
        <View style={styles.recommendationContainer}>
          <View style={styles.recommendation}>
            <Text style={styles.CartTitle}>
              En son satın aldığınız ürünleri satın alan müşterilerimizin aldığı diğer ürünler
            </Text>
          </View>
          <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.productBox}>
                <Image source={item.image} style={styles.productImage} />
                <Text style={styles.recommendationTitle} numberOfLines={2} ellipsizeMode="tail">
                  {item.title}
                </Text>
                <Text style={styles.productPrice}>{item.price}</Text>
                <View style={styles.starContainer}>
                  <FontAwesomeIcon name="star" size={20} color="#f46e01" />
                  <FontAwesomeIcon name="star" size={20} color="#f46e01" />
                  <FontAwesomeIcon name="star" size={20} color="#f46e01" />
                  <FontAwesomeIcon name="star" size={20} color="#f46e01" />
                  <FontAwesomeIcon name="star-half" size={20} color="#f46e01" />
                  <Text style={[{ marginLeft: 10, fontSize: 16, color: '#0f4557' }]}>{item.rating}</Text>
                </View>
                <TouchableOpacity onPress={() => handleAddToCart(item)} style={styles.addToCard}>
                  <Text style={styles.thinText}>Sepete Ekle</Text>
                </TouchableOpacity>
              </View>
            )}
            contentContainerStyle={styles.productContainer}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Alt Buton */}
        <View style={styles.bottomButtonWrapper}>
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.thinText}>Alışverişe devam et</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.height}></View>
      </ScrollView>
      <BottomTabBar />

    </View>
  );
};

export default Cart;
