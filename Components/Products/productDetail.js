import React, { useState } from 'react'
import { Image, TextInput, View, Modal, Text, TouchableOpacity } from 'react-native'
import styles from '../../Styles/productDetailStyles'
import LinearGradient from 'react-native-linear-gradient'
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import BottomTabBar from '../Layout/BottomTabBar';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const ProductDetail = () => {
    const selectedProduct = useSelector((state) => state.products.selectedProduct);
    const today = new Date();
    const day = today.getDate();
    const tomorrow = today.getDate() + 1;
    const month = today.toLocaleString('tr-TR', { month: 'long' });
    const [quantity, setQuantity] = useState(1);
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#50dcd9', '#55ddbb']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.gradientContainer, { paddingVertical: 5 }]}>
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
            <ScrollView contentContainerStyle={{ paddingVertical: 16 }}>

                <View>
                    <View style={[styles.descriptionContainer, { flexDirection: 'row', justifyContent: 'space-between', }]}>
                        <Text style={[styles.text, { color: '#33538a', textDecorationLine: 'underline', textDecorationColor: '#33538a' }]}>
                            Marka: <Text>{selectedProduct.brand}</Text>
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ paddingHorizontal: 5, fontSize: 12, }}>
                                {selectedProduct.starCount}
                            </Text>
                            <FontAwesomeIcon name="star" size={14} color="#f46e01" />
                            <FontAwesomeIcon name="star" size={14} color="#f46e01" />
                            <FontAwesomeIcon name="star" size={14} color="#f46e01" />
                            <FontAwesomeIcon name="star" size={14} color="#f46e01" />
                            <FontAwesomeIcon name="star-half" size={14} color="#f46e01" />
                            <Text style={{ paddingHorizontal: 5, fontSize: 12, }}>{selectedProduct.starText}</Text>
                        </View>
                    </View>

                    <View style={{ alignItems: 'flex-start', paddingHorizontal: 16 }}>
                        <Text style={styles.text}>{selectedProduct.label}</Text>
                        <Text style={styles.text}>{selectedProduct.salesInfo}</Text>
                    </View>
                </View>

                <View style={styles.imageWrapper}>
                    <Image source={selectedProduct.image} style={styles.image} />
                    <FontistoIcon
                        name="share-a" size={24} style={styles.shareIcon}
                    />
                    <FontistoIcon
                        name="heart" size={24} style={styles.heartIcon}
                    />
                </View>

                <View style={styles.descriptionContainer}>
                    <Text style={styles.priceText}>{selectedProduct.price}</Text>

                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Kullan</Text>
                        </TouchableOpacity>
                        <View style={styles.textContainer}>
                            <Text style={styles.offerText}>
                                <Text style={{ backgroundColor: '#27aa49' }} >50 TL</Text> indirimden faydalanmak için 250 TL tutarında alışveriş yapın{' '}
                                <Text style={styles.conditionText}>Koşullar</Text>
                            </Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Kullan</Text>
                        </TouchableOpacity>
                        <View style={styles.textContainer}>
                            <Text style={styles.offerText}>
                                <Text style={{ backgroundColor: '#27aa49' }}>Kampanyalar</Text> uygulamada 400 TL'ye 100 TL indirim{' '}
                                <Text style={styles.conditionText}>Koşullar</Text>
                            </Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Kullan</Text>
                        </TouchableOpacity>
                        <View style={styles.textContainer}>
                            <Text style={styles.offerText}>
                                <Text style={{ backgroundColor: '#27aa49' }}>Kampanyalar</Text>600 TL üzeri alışverişinize %5 indirim{' '}
                                <Text style={styles.conditionText}>Kampanya ürünlerini gör</Text>
                            </Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Kullan</Text>
                        </TouchableOpacity>
                        <View style={styles.textContainer}>
                            <Text style={styles.offerText}>
                                <Text style={{ backgroundColor: '#27aa49' }}>Prime Üyelerine Özel</Text>600 TL üzeri alışverişinize %10 indirim{' '}
                                <Text style={styles.conditionText}>Kampanya ürünlerini gör</Text>
                            </Text>
                        </View>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.offerText}><Text style={styles.conditionText}>ÜCRETSİZ teslimat</Text>
                            <Text>{day} {month} </Text>
                            ilk siparişinizde
                        </Text>
                        <Text style={styles.offerText}>veya en hızlı teslimat <Text>Yarın {tomorrow} {month}</Text></Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginVertical: 5, fontSize: 18 }}>
                        <FontAwesomeIcon name="map-marker" size={20} color="gray" style={{ marginHorizontal: 5 }} />
                        <Text style={[styles.offerText, { color: '#33538a' }]}>Teslimat konumu: Ankara 06450 - Konumu Güncelle</Text>
                    </View>

                    <View>
                        <Text style={[{ color: '#275843', fontWeight: '500', fontSize: 18, marginVertical: 10 }]}>Stokta var</Text>
                        <View style={styles.container}>
                            <TouchableOpacity style={styles.selectButton} onPress={() => setModalVisible(true)}>
                                <Text style={styles.selectButtonText}>Adet: {quantity}</Text>
                            </TouchableOpacity>

                            <Modal
                                visible={modalVisible}
                                animationType="slide"
                                transparent={true}
                                onRequestClose={() => setModalVisible(false)}
                            >
                                <View style={styles.modalOverlay}>
                                    <View style={styles.modalContent}>
                                        <View style={[styles.modalHeader, { paddingHorizontal: 10, paddingVertical: 10 }]}>
                                            <Text style={styles.modalTitle}>Adet</Text>
                                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                                <Text style={styles.closeButton}>✕</Text>
                                            </TouchableOpacity>
                                        </View>

                                        <ScrollView style={styles.numberList}>
                                            {[...Array(9)].map((_, i) => (
                                                <TouchableOpacity
                                                    key={i}
                                                    style={styles.numberButton}
                                                    onPress={() => {
                                                        setQuantity(i + 1);
                                                        setModalVisible(false);
                                                    }}
                                                >
                                                    <Text style={styles.numberText}>{i + 1}</Text>
                                                </TouchableOpacity>
                                            ))}
                                        </ScrollView>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                        <TouchableOpacity style={styles.buttonProduct}>
                            <Text style={{ fontSize: 16 }}>Sepete Ekle</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.buttonProduct, { backgroundColor: '#fa8828' }]}>
                            <Text style={{ fontSize: 16 }}>Şimdi Al</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ padding: 5, backgroundColor: '#ccc' }}>
                    <View style={{ padding: 5, backgroundColor: 'white' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, marginTop: 10, padding: 5 }}>
                            <Text>Gönderen</Text>
                            <Text>Amazon.com.tr</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                            <Text>Hediye seçenekleri</Text>
                            <Text style={{ color: '#33538a' }}>Ödeme sırasında mevcut</Text>
                        </View>
                        <Text style={{ marginBottom: 10, marginTop: 10, fontSize: 18, color: '#33538a', padding: 5 }}>Listeye Ekle</Text>
                    </View>
                </View>

                <View style={{ paddingHorizontal: 5, backgroundColor: '#ccc' }}>
                    <View style={{ padding: 5, backgroundColor: 'white' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Güvenle Satın alın</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, marginTop: 10, padding: 5 }}>
                            <Text style={{ color: '#33538a' }}>Amazon aracılığıyla gönder</Text>
                            <Text style={{ color: '#33538a' }}>Güvenli işlem</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                            <Text style={{ color: '#33538a' }}>İade Politikası</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.height}></View>
            </ScrollView>
            <BottomTabBar />
        </View>
    )
}

export default ProductDetail
