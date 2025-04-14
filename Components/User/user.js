import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import styles from '../../Styles/userStyles'
import BottomTabBar from '../Layout/BottomTabBar';
import LinearGradient from 'react-native-linear-gradient';

const User = () => {
    return (
        <>
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
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <View style={styles.headerContainer}>
                            <View style={styles.userSection}>
                                <Icon name="person-circle-outline" size={40} color="#333" />
                                <Text style={styles.greetingText}>Merhaba, Hüsna</Text>
                                <Icon name="chevron-down-outline" size={16} color="#333" style={styles.dropdownIcon} />
                            </View>
                            <View style={styles.rightIcons}>
                                <TouchableOpacity style={styles.iconWrapper}>
                                    <Icon name="notifications-outline" size={22} color="#333" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.iconWrapper}>
                                    <Icon name="settings-outline" size={22} color="#333" />
                                </TouchableOpacity>
                                <View style={styles.flagContainer}>
                                    <Image
                                        source={require('../../assets/user/turkBayrak.png')}
                                        style={styles.flagIcon}
                                        resizeMode="contain"
                                    />
                                    <Text style={styles.descriptionText}>TR</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity style={styles.button} onPress={() => { }}>
                                <Text style={styles.descriptionText}>Siparişler</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => { }}>
                                <Text style={styles.descriptionText}>Tekrar Satın Alın</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => { }}>
                                <Text style={styles.descriptionText}>Hesap</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => { }}>
                                <Text style={styles.descriptionText}>Listeler</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.orderContainer}>
                            <Text style={[styles.textIncreaseBold, { marginBottom: 20 }]}>Siparişlerim</Text>
                            <Text style={styles.textIncrease}>Merhaba,yeni siparişin yok.</Text>
                            <TouchableOpacity style={styles.buttonRectangle} onPress={() => { }}>
                                <Text style={[styles.descriptionText, { fontSize: 18 }]}>Ana sayfaya dön</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.jointgainContainer}>
                        <View style={styles.jointAgain}>
                            <Text style={styles.textIncreaseBold}>Tekrar Satın Al</Text>
                            <Text style={styles.textIncrease}>Tekrar Satın Al'da başkalarının yeniden sipariş ettiği ürünleri görün </Text>
                            <TouchableOpacity style={styles.buttonRectangle} onPress={() => { }}>
                                <Text style={[styles.descriptionText, { fontSize: 18 }]}>Tekrar Satın Al sayfasını ziyaret edin</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.jointgainContainer}>
                        <View style={styles.jointAgain}>
                            <Text style={styles.textIncreaseBold}>Listelerim</Text>
                            <Text style={styles.textIncrease}>Hiç Liste oluşturmadınız </Text>
                            <TouchableOpacity style={styles.buttonRectangle} onPress={() => { }}>
                                <Text style={[styles.descriptionText, { fontSize: 18 }]}>Bir Liste Oluştur</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.jointgainContainer}>
                        <View style={styles.jointAgain}>
                            {/* Başlık ve link aynı satırda */}
                            <View style={styles.headerRow}>
                                <Text style={styles.textIncreaseBold}>Hesabım</Text>
                                <TouchableOpacity onPress={() => { }}>
                                    <Text style={styles.linkText}>Tümünü göster</Text>
                                </TouchableOpacity>
                            </View>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                                <TouchableOpacity style={styles.buttonSequential}>
                                    <Text style={styles.buttonText}>Siparişlerim</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonSequential}>
                                    <Text style={styles.buttonText}>Ödemeleriniz</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonSequential}>
                                    <Text style={styles.buttonText}>Adres Defteri</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonSequential}>
                                    <Text style={styles.buttonText}>Hediye Kartı bakiyeniz</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonSequential}>
                                    <Text style={styles.buttonText}>1-Tık Ayarları</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonSequential}>
                                    <Text style={styles.buttonText}>Son Görüntülediğiniz ürünler</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </View>

                    <View style={styles.jointgainContainer}>
                        <View style={styles.jointAgain}>
                            <View style={styles.headerRow}>
                                <Text style={styles.textIncreaseBold}>Hediye kart bakiyes: ₺0,00</Text>
                                <TouchableOpacity onPress={() => { }}>
                                    <Text style={styles.linkText}>Yönet</Text>
                                </TouchableOpacity>
                            </View>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                                <TouchableOpacity style={styles.buttonSequential}>
                                    <Text style={styles.buttonText}>Hediye Kartı Kullanma</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonSequential}>
                                    <Text style={styles.buttonText}>Hediye Kartı Satın Al</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.jointgainContainer}>
                        <View style={styles.jointAgain}>

                            <Text style={styles.textIncreaseBold}>Daha fazla yardıma mı ihtiyacınız var?</Text>

                            <TouchableOpacity style={styles.buttonSequential}>
                                <Text style={styles.buttonText}>Müşteri Hizmetlerini ziyaret edin</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <BottomTabBar /></>
    );
};

export default User;
