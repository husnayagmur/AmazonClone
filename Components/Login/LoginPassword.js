import React, { useState } from 'react';
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Dimensions,
    Pressable,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const LoginPassword = ({ navigation }) => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <ScrollView contentContainerStyle={styles.pageContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    <Text style={{ fontWeight: 'bold' }}>amazon</Text>.com.tr
                </Text>
            </View>

            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.heading}>Giriş yap</Text>

                    <View style={styles.inputGroup}>
                        <Text style={{ fontSize: 16, marginBottom: 10 }}>
                            e-posta düzenle0404 <Text style={{ color: '#33538a' }}>Değiştir</Text>
                        </Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Amazon Şifresi"
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={setPassword}
                        />

                        <View style={styles.row}>
                            <Pressable
                                style={styles.checkbox}
                                onPress={() => setShowPassword(!showPassword)}
                            >
                                {showPassword && <View style={styles.checked} />}
                            </Pressable>
                            <Text style={styles.label}>Şifreyi göster</Text>

                            <TouchableOpacity style={{ marginLeft: 'auto' }}>
                                <Text style={styles.forgot}>Şifremi unuttum.</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => console.log('Giriş yap')}
                    >
                        <Text style={styles.buttonText} onPress={() => navigation.navigate('Home')}>Giriş yap</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ backgroundColor: '#ccc' }}>
                <View
                    style={{
                        backgroundColor: 'white',
                        marginTop: 3,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ fontSize: 14, marginTop: 10, color: '#ababab' }}>
                        1996-2025, Amazon.com, Inc veya bağlı kuruluşları
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        backgroundColor: '#f7f7f7',
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
    heading: {
        fontSize: 22,
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
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#888',
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checked: {
        width: 12,
        height: 12,
        backgroundColor: '#f3af14',
    },
    label: {
        fontSize: 14,
        color: '#333',
    },
    forgot: {
        fontSize: 14,
        color: '#33538a',
        textDecorationLine: 'underline',
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
});

export default LoginPassword;
