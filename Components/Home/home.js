import React, { useState } from 'react';
import { View, TextInput, Text, TouchableWithoutFeedback, Image, ScrollView } from 'react-native';
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
        style={styles.gradientContainer}
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

        <View style={styles.deliveryContainer}>
          <FontAwesome name="map-marker" size={20} color="gray" style={styles.locationIcon} />
          <Text style={styles.deliveryText}>Teslimat konumu: Ankara 06450 - Konumu Güncelle</Text>
          <FontAwesome name="angle-down" size={15} color="gray" style={styles.downArrowIcon} />
        </View>
      </LinearGradient>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
       style={[styles.imageRow, { backgroundColor: 'pink' }]} 
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        {[
          { img: require('../../assets/gununFirsatlari.jpg'), label: 'Günün Fırsatları' },
          { img: require('../../assets/cokAlAzOde.jpg'), label: 'Çok Al Az Öde' },
          { img: require('../../assets/intFav.jpg'), label: 'İnternete Özel' },
          { img: require('../../assets/kupon.jpg'), label: 'Kuponlar' },
          { img: require('../../assets/gaming.jpg'), label: 'Gaming' },
          { img: require('../../assets/gulumseten.jpg'), label: 'Gülümseten Fiyatlar' },
          { img: require('../../assets/eskiyiVerYeniyiAl.jpg'), label: 'Eskiyi Ver Yeniyi Al' },
          { img: require('../../assets/cokSatanlar.jpg'), label: 'Çok Satanlar' },
          { img: require('../../assets/pazarYeri.jpg'), label: 'Pazar Yeri' },
          { img: require('../../assets/cokluPaketler.jpg'), label: 'Çoklu Paketler' },
          { img: require('../../assets/evimEvim.jpg'), label: 'Evim Evim' },
          { img: require('../../assets/bebekDunyasi.jpg'), label: 'Bebek Dünyası' },
          { img: require('../../assets/ofisIhtiyaclari.jpg'), label: 'Ofis İhtiyaçları' },
          { img: require('../../assets/amazonsatis.jpg'), label: 'Amazon Satış' },
        ].map((item, index) => (
          <View key={index} style={{ alignItems: 'center', marginHorizontal: 8 }}>
            <Image
              source={item.img}
              style={styles.circleImage}
            />
            <Text style={styles.imageLabel}>{item.label}</Text>
          </View>
        ))}
        
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
