import React, { useState } from 'react';
import { View, TextInput, Text, TouchableWithoutFeedback, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../../Styles/homeStyles';

const Home = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const handleIconPress = (icon) => {
    setActiveIcon(icon);
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
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <LinearGradient
          colors={['#50dcd9', '#55ddbb']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientContainer}
        >
          <View style={styles.deliveryContainer}>
            <FontAwesome name="map-marker" size={20} color="gray" style={styles.locationIcon} />
            <Text style={styles.deliveryText}>Teslimat konumu: Ankara 06450 - Konumu Güncelle</Text>
            <FontAwesome name="angle-down" size={15} color="gray" style={styles.downArrowIcon} />
          </View>
        </LinearGradient>
        <View style={{ height: '9%', marginBottom: 10 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={[styles.imageRow, { paddingVertical: 10 }]}

          >
            {[{ img: require('../../assets/home/gununFirsatlari.jpg'), label: 'Günün Fırsatları' },
            { img: require('../../assets/home/cokAlAzOde.jpg'), label: 'Çok Al Az Öde' },
            { img: require('../../assets/home/intFav.jpg'), label: 'İnternete Özel' },
            { img: require('../../assets/home/kupon.jpg'), label: 'Kuponlar' },
            { img: require('../../assets/home/gaming.jpg'), label: 'Gaming' },
            { img: require('../../assets/home/gulumseten.jpg'), label: 'Gülümseten Fiyatlar' },
            { img: require('../../assets/home/eskiyiVerYeniyiAl.jpg'), label: 'Eskiyi Ver Yeniyi Al' },
            { img: require('../../assets/home/cokSatanlar.jpg'), label: 'Çok Satanlar' },
            { img: require('../../assets/home/pazarYeri.jpg'), label: 'Pazar Yeri' },
            { img: require('../../assets/home/cokluPaketler.jpg'), label: 'Çoklu Paketler' },
            { img: require('../../assets/home/evimEvim.jpg'), label: 'Evim Evim' },
            { img: require('../../assets/home/bebekDunyasi.jpg'), label: 'Bebek Dünyası' },
            { img: require('../../assets/home/ofisIhtiyaclari.jpg'), label: 'Ofis İhtiyaçları' },
            { img: require('../../assets/home/amazonsatis.jpg'), label: 'Amazon Satış' },
            ].map((item, index) => (
              <View key={index} style={{ alignItems: 'center' }}>
                <Image
                  source={item.img}
                  style={styles.circleImage}
                />
                <Text style={styles.imageLabel}>{item.label}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.wrapper}>
          <View>
            <Text style={styles.privilegesTitle}>Tek üyelik, birden fazla ayrıcalık</Text>
            <View style={{ alignItems: 'center', width: '100%' }}>
              <Text style={styles.primeText}>amazon prime</Text>
            </View>
            <View style={styles.privilegesContainer}>
              {[{ img: require('../../assets/home/kargo.jpg'), label: 'Bedava aynı & ertesi gün kargo' },
              { img: require('../../assets/home/market.jpg'), label: 'Market alışverişlerinde %10 indirim' },
              { img: require('../../assets/home/prime2.jpg'), label: 'İnternete Özel' },
              { img: require('../../assets/home/popDizi.jpg'), label: 'Popüler diziler ve filmler' },
              ].map((item, index) => (
                <React.Fragment key={index}>
                  <View style={styles.privilegeItem}>
                    <Image source={item.img} style={styles.circleImage} />
                    <Text style={styles.privilegeLabel}>{item.label}</Text>
                  </View>
                  {index < 3 && <Text style={styles.plusSign}>+</Text>}
                </React.Fragment>
              ))}
            </View>
          </View>
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Prime'a Katıl</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rectangleWrapperContainer}>
          <LinearGradient
            colors={['#0752da', '#FFFFFF']}
            style={styles.gradientContainer}
          >
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.rectangleWrapper}
            >
              {[
                {
                  img: require('../../assets/home/iphone.jpg'),
                  label: 'Alışverişe devam edin',
                  style: { color: '#FF6347' }
                },
                {
                  img: require('../../assets/home/dortYildiz.jpg'),
                  label: 'Senin için 4 yıldız ve üstü fırsat',
                  style: { color: '#FFD700' }
                },
                {
                  img: require('../../assets/home/amazoonDepo.jpg'),
                  label: 'İade edilmiş ürünlerde avantajlı fiyatlar',
                  style: { color: '#008080' }
                },
                {
                  img: require('../../assets/home/kargoBedava.jpg'),
                  label: 'İlk siparişinde kargo bedava',
                  style: { color: 'black' }
                },
                {
                  img: require('../../assets/home/eskiyiVerYeniyiAl.jpg'),
                  label: 'Eskiyi ver yeniyi kap',
                  style: { color: '#8A2BE2' } 
                },
                {
                  img: require('../../assets/home/modaUrunleri.jpg'),
                  label: 'Moda ürünlerinde sezon sonu fırsatları',
                  style: { color: '#FF69B4' } 
                },
                {
                  img: require('../../assets/home/butceDostu.jpg'),
                  label: 'Butçe dostu ürünleri keşfet',
                  style: { color: '#20B2AA' } 
                }
              ]
                .map((item, index) => (
                  <View key={index} style={styles.rectangleCard}>
                    <Image source={item.img} style={styles.rectangleImage} />
                    <Text style={[styles.rectangleText, item.style]}>{item.label}</Text>
                  </View>
                ))}
            </ScrollView>
          </LinearGradient>
        </View>

        <View>
          <LinearGradient
            colors={['#000000', '#808080']}
            style={{ padding: 5 }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View>
                <Text style={styles.whiteBoldText}>
                  PUMA
                </Text>
                <Text style={styles.whiteBoldText}>
                  Marka Haftası
                </Text>
              </View>
              <Image
                source={require('../../assets/home/pumaAyakkabi.png')}
                style={{ width: 100, height: 50, borderRadius: 10, marginLeft: 50 }}
              />
              <Image
                source={require('../../assets/home/pumaLogo.png')}
                style={{ width: 70, height: 50, borderRadius: 10, marginBottom: 20, marginTop: 20, marginLeft: 10 }}
              />
            </View>
          </LinearGradient>
        </View>
        <View style={styles.containerKitchen}>
          <Text style={styles.titleKitchen}>Mutfak kategorisini keşfet</Text>
          <View style={styles.gridKitchen}>
            <View style={styles.itemKitchen}>
              <Image source={require('../../assets/home/mutfakRobotu.jpg')} style={styles.imageKitchen} />
            </View>
            <View style={styles.itemKitchen}>
              <Image source={require('../../assets/home/tostMakinesi.jpg')} style={styles.imageKitchen} />
            </View>
            <View style={styles.itemKitchen}>
              <Image source={require('../../assets/home/suIsıtıcı.jpg')} style={styles.imageKitchen} />
            </View>
            <View style={styles.itemKitchen}>
              <Image source={require('../../assets/home/kahveMakinesi.jpg')} style={styles.imageKitchen} />
            </View>
          </View>
          <Text style={styles.linkText}>Kategorileri gör</Text>
        </View>

        <View style={styles.fashionContainer}>
          <Text style={styles.title}>
            Moda'da sezon sonu fırsatları | Sepette indirimler
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.scrollContainer}>
              {[
                { img: require('../../assets/home/tisort.png'), description: 'Şık ve rahat tişört' },
                { img: require('../../assets/home/sporcuAtlet.png'), description: 'Sporcu atlet' },
                { img: require('../../assets/home/adidasAyk.png'), description: 'Adidas ayakkabı' },
                { img: require('../../assets/home/poloTisort.png'), description: 'Polo tişört' },
                { img: require('../../assets/home/kotCeket.png'), description: 'Kot ceket' },
                { img: require('../../assets/home/pumaAyk.png'), description: 'Puma ayakkabı' },
              ].map((item, index) => (
                <View key={index} style={styles.itemContainer}>
                  <Image source={item.img} style={styles.image} />
                  <View style={styles.discountContainer}>
                    <Text style={styles.discountText}>Sepette %10</Text>
                  </View>
                  <View style={{ backgroundColor: 'white', marginTop: 5 }}>
                    <Text style={styles.descriptionText}>{item.description}</Text>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

      </ScrollView>
      {/* Alt Sabit Bar */}
      <View style={styles.bottomBarContainer}>
        <View style={styles.bottomBar}>
          <TouchableWithoutFeedback onPress={() => handleIconPress('home')}>
            <View style={styles.iconContainer}>
              {activeIcon === 'home' && <View style={styles.activeTopBar} />}
              <FontAwesome name="home" style={[styles.icon, activeIcon === 'home' && styles.activeIcon]} />
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => handleIconPress('user')}>
            <View style={styles.iconContainer}>
              {activeIcon === 'user' && <View style={styles.activeTopBar} />}
              <FontAwesome name="user" style={[styles.icon, activeIcon === 'user' && styles.activeIcon]} />
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => handleIconPress('shopping-cart')}>
            <View style={styles.iconContainer}>
              {activeIcon === 'shopping-cart' && <View style={styles.activeTopBar} />}
              <FontAwesome name="shopping-cart" style={[styles.icon, activeIcon === 'shopping-cart' && styles.activeIcon]} />
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => handleIconPress('bars')}>
            <View style={styles.iconContainer}>
              {activeIcon === 'bars' && <View style={styles.activeTopBar} />}
              <FontAwesome name="bars" style={[styles.icon, activeIcon === 'bars' && styles.activeIcon]} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

export default Home;
