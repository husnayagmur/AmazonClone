import React, { useState } from 'react';
import { View, FlatList, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import BottomTabBar from '../Layout/BottomTabBar';
import styles from '../../Styles/categoriesStyles';
import data from '../../data/categoriesData';
const { height } = Dimensions.get('window');

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};
const CategoryBox = ({ item, isSelected, onPress }) => (
  <TouchableOpacity style={styles.boxContainer} onPress={onPress}>
    <Text style={styles.label}>{item.label}</Text>
    <View style={styles.box}>
      <Image source={item.img} style={styles.image} resizeMode="contain" />
    </View>
  </TouchableOpacity>
);

const Categories = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const groupedData = chunkArray(data, 3);

  const renderGroup = (group, groupIndex) => {
    const startIndex = groupIndex * 3;

    return (
      <View key={groupIndex}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {group.map((item, index) => {
            const actualIndex = startIndex + index;
            return (
              <CategoryBox
                key={actualIndex}
                item={item}
                isSelected={selectedIndex === actualIndex}
                onPress={() => {
                  setSelectedIndex(selectedIndex === actualIndex ? null : actualIndex);
                }}
              />

            );
          })}
        </View>

        {selectedIndex !== null &&
          selectedIndex >= startIndex &&
          selectedIndex < startIndex + 3 && (
            <View style={styles.buttonGroup}>
              {data[selectedIndex].buttonLabel.map((label, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={styles.groupCustomButton}
                  onPress={() => {
                    if (label === 'Gıda Ürünleri') {
                      navigation.navigate('ProductList');
                    }
                  }}
                >
                  <Text style={styles.buttonText}>{label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={['#50dcd9', '#55ddbb']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.gradientContainer, { paddingVertical: 5 }]}
      >
        <View style={styles.searchContainer2}>
          <View style={styles.searchContainer}>
            <FontistoIcon name="search" size={20} color="gray" style={styles.Icon} />
            <TextInput placeholder="Amazon.com.tr'de Ara" style={styles.input} />
            <FontistoIcon name="camera" size={20} color="gray" style={styles.Icon} />
          </View>
        </View>
      </LinearGradient>

      <FlatList
        data={groupedData}
        renderItem={({ item, index }) => renderGroup(item, index)}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <View>
          {['Hesapları Değiştir', 'Oturumu Kapat', 'Müşteri Hizmetleri'].map((text, index) => (
            <TouchableOpacity
              key={index}
              style={styles.customButton}
              onPress={() => {
                if (text === 'Oturumu Kapat') {
                  navigation.navigate('LoginHome');
                }
              }}
            >
              <Text style={styles.buttonText}>{text}</Text>
              <Icon name="chevron-right" size={20} color="#333" />
            </TouchableOpacity>
          ))}
        </View>
        }
      />

      <View style={{ height: height * 0.07 }} />
      <BottomTabBar />
    </View>
  );
};

export default Categories;
