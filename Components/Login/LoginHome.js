import React from 'react';
import { Image, View, StyleSheet, Dimensions, Text, Button, TouchableOpacity } from 'react-native';

const LoginHome = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Image
                    source={require('../../assets/amazonLogo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.title}>Hesabınıza giriş yapın</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>İstel listenizi görüntüleyin</Text>
                <Text style={styles.description}>Siparişleri Bulma ve Sınıflandırma</Text>
                <Text style={styles.description}>Alışverişlerinizi Takip Edin</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: '#e49644' }]}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}>Müşteri misiniz? Giriş yapın</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Yeni bir Amazon.com.tr kullanıcısı mısınız?Hesap oluşturun</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => navigation.navigate('Home')}>Girişi atla</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: width * 0.1
    },
    logo: {
        width: width * 0.8,
        height: width * 0.5,
    },
    titleContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: '700'
    },
    descriptionContainer: {
        marginHorizontal: 30,
        marginVertical: 10
    },
    description: {
        fontSize: 16,
        paddingVertical: 5
    },
    buttonContainer: {
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#dcdce0',
        paddingVertical: 12,
        marginBottom: 12,
        borderRadius: 8,
        alignItems: 'center',
        width: width * 0.9,
        borderWidth: 0.8,
        borderColor: '#ccc'
    },
    buttonText: {
        color: '#333',
        fontSize: 14,
    },
});

export default LoginHome;
