import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';  
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppHome = () => {
  

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
                        <TextInput placeholder="Amazon.com.tr'de Ara" style={styles.input} />
                        <Icon name="camera" size={20} color="gray" style={styles.cameraIcon} />
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
};

export default AppHome;


const styles = {
    container: {
        flex: 1,
        width: '100%',
        position: 'relative',
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
    bottomBarContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 10,
        zIndex: 10,
    },
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        borderWidth: 1,
        borderColor: '#105150',
    },
    icon: {
        fontSize: 28,
        color: '#333',
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 13,
    },
    activeTopBar: {
        position: 'absolute',
        top: 0,
        width: '150%',
        height: 4,
        backgroundColor: '#105150',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    activeIcon: {
        color: '#105150',
    },
};
