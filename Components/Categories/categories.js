import React from 'react';
import { View, FlatList, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import BottomTabBar from '../Layout/BottomTabBar';
const { width } = Dimensions.get('window');
const boxSize = width / 3 - 17; // padding ile birlikte 3 sütun

const data = [
    { img: require('../../assets/categories/prime.png'), label: 'Prime' },
    { img: require('../../assets/categories/hediye.png'), label: 'Hediye' },
    { img: require('../../assets/categories/firsatlar.png'), label: 'Fırsatlar' },
    { img: require('../../assets/categories/gıda.png'), label: 'Gıda ve İçecek' },
    { img: require('../../assets/categories/saglikBakim.png'), label: 'Sağlık Bakım ve Temizlik' },
    { img: require('../../assets/categories/evcilHayvan.png'), label: 'Evcil Hayvan Ürünleri' },
    { img: require('../../assets/categories/moda.png'), label: 'Moda ve Güzellik' },
    { img: require('../../assets/categories/evMutfak.png'), label: 'Ev, Mutfak ve Yapı Market' },
    { img: require('../../assets/categories/bilgisayar.png'), label: 'Telefon,Bilgisayar ve Elektronik' },
    { img: require('../../assets/categories/gitar.png'), label: 'Müzik Video ve Oyun' },
    { img: require('../../assets/categories/kitap.png'), label: 'Kitap' },
    { img: require('../../assets/categories/bebek.png'), label: 'Bebek ve Çocuk Ürünleri' },
    { img: require('../../assets/categories/otomativ.png'), label: 'Otomotiv' },
    { img: require('../../assets/categories/spor.png'), label: 'Spor ve Outdoor' },
    { img: require('../../assets/categories/bebek.png'), label: 'Ofis ve Bilgisayar Aksesuarları' },
    { img: require('../../assets/categories/bebek.png'), label: 'Satış Yap' },
    { img: require('../../assets/categories/bebek.png'), label: 'Hesabım' },
];

const Categories = () => {
    const renderItem = ({ item }) => (
        <View style={styles.boxContainer}>
            <Text style={styles.label}>{item.label}</Text>
            <View style={styles.box}>
                <Image source={item.img} style={styles.image} resizeMode="contain" />
            </View>
        </View>
    );

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
                    <FontistoIcon name="search" size={20} color="gray" style={styles.searchIcon} />
                    <TextInput
                      placeholder="Amazon.com.tr'de Ara"
                      style={styles.input}
                    />
                    <FontistoIcon name="camera" size={20} color="gray" style={styles.cameraIcon} />
                  </View>
                </View>
              </LinearGradient>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                numColumns={3}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={
                    <View>
                        <TouchableOpacity style={styles.customButton}>
                            <Text style={styles.buttonText}>Hesapları Değiştir</Text>
                            <Icon name="chevron-right" size={20} color="#333" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.customButton}>
                            <Text style={styles.buttonText}>Oturumu Kapat</Text>
                            <Icon name="chevron-right" size={20} color="#333" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.customButton}>
                            <Text style={styles.buttonText}>Müşteri Hizmetleri</Text>
                            <Icon name="chevron-right" size={20} color="#333" />
                        </TouchableOpacity>
                    </View>
                }
            />
            <BottomTabBar/>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#fff', // Arka plan rengini beyaz yaptık
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 16,
        paddingBottom: 10,
        color: '#333',
    },
    list: {
        paddingHorizontal: 10,
        paddingBottom: 20,
    },
    boxContainer: {
        width: boxSize,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        backgroundColor: 'white',
        borderColor: '#195d55',
        borderWidth: 1,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4, // Android için
    },
    box: {
        width: boxSize,
        alignItems: 'bottom',
        backgroundColor: '#dff6f4',
        borderColor: '#195d55',
        borderRadius: 12,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginTop: 20,
    },
    image: {
        width: 120,
        height: 120,
        marginBottom: 8,
    },
    label: {
        fontSize: 14,
        textAlign: 'center',
        color: '#333',
    },
    customButton: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#195d55',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 12,
        marginBottom: 5,
        alignItems: 'left',
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonText: {
        color: '#333',
        fontSize: 16,
    },
    gradientContainer: {
        justifyContent: 'start',
        width: '100%',
      },
      searchContainer: {
        padding: 40,
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
        width: '100%',
      },
      searchContainer2: {
        marginTop: 20,
        paddingHorizontal: 20,
      },
      searchIcon: {
        marginRight: 5,
        color: '#333333',
        fontSize: 20,
      },
      cameraIcon: {
        marginLeft: 5,
        color: '#333333',
      },
      input: {
        flex: 1,
        height: 40,
        fontSize: 18,
        color: '#4a4a4a',
        textAlignVertical: 'center',
        paddingVertical: 0,
      },
});

export default Categories;
