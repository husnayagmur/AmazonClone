import React from 'react';
import {
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Dimensions, // burada ekleniyor
} from 'react-native';

const { width, height } = Dimensions.get('window'); // burada width tanımlanıyor

const Login = ({navigation}) => {
    return (
        <ScrollView contentContainerStyle={styles.pageContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}><Text style={{ fontWeight: 'bold' }}>amazon</Text>.com.tr</Text>
            </View>

            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.heading}>Giriş yapın veya hesap oluşturun</Text>

                    <View style={styles.inputGroup}>
                        <Text style={[styles.heading, { fontSize: 16, marginBottom: 5 }]}>
                            Cep telefonu numarası veya e-posta girin
                        </Text>
                        <TextInput style={styles.input} keyboardType="email-address" />
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('LoginPassword')}
                    >
                        <Text style={styles.buttonText}>Devam et</Text>
                    </TouchableOpacity>

                    <Text style={styles.infoText}>
                        Devam ederek Amazon{' '}
                        <Text style={styles.link}>Kullanım Koşullarını</Text> ve{' '}
                        <Text style={styles.link}>Gizlilik Bildirimini</Text> kabul ediyorsunuz.
                    </Text>

                    <Text style={styles.link}>Yardıma mı ihtiyacınız var?</Text>
                </View>
            </View>
            <View style={{ backgroundColor: '#ccc' }}>
                <View style={{ backgroundColor: 'white', marginTop: 3, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 14, marginTop: 10, color: '#ababab' }}>1996-2025,Amazon.com,Inc veya bağlı kuruluşları</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        backgroundColor: '#fff',
        flexGrow: 1,
    },
    container: {
        padding: 20,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ebebeb',
        paddingVertical: 20,
    },
    title: {
        marginTop: 25,
        fontSize: 22,
        marginLeft: 5,
    },
    content: {
        marginTop: 20,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    inputGroup: {
        marginBottom: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        padding: 10,
        fontSize: 14,
    },
    button: {
        padding: 12,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 15,
        backgroundColor: '#f3af14',
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },
    infoText: {
        fontSize: 16,
        color: '#555',
        marginBottom: 10,
    },
    link: {
        color: '#33538a',
        textDecorationLine: 'underline',
        fontSize: 16,
        marginTop: 10,
    },
});

export default Login;
