import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const BottomTabBar = () => {
    const [activeIcon, setActiveIcon] = useState(null);
    const navigation = useNavigation(); 

    const handleIconPress = (icon) => {
        setActiveIcon(icon);
        if (icon === 'home') {
            navigation.navigate('Home');  
        } else if (icon === 'user') {
            navigation.navigate('User');  
        } else if (icon === 'shopping-cart') {
            navigation.navigate('Cart');  
        } else if (icon === 'bars') {
            navigation.navigate('Categories'); 
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.bottomBarContainer}>
                <View style={styles.bottomBar}>
                    <TouchableOpacity onPress={() => handleIconPress('home')} style={styles.iconContainer}>
                        {activeIcon === 'home' && <View style={styles.activeTopBar} />}
                        <FontAwesome name="home" style={[styles.icon, activeIcon === 'home' && styles.activeIcon]} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleIconPress('user')} style={styles.iconContainer}>
                        {activeIcon === 'user' && <View style={styles.activeTopBar} />}
                        <FontAwesome name="user" style={[styles.icon, activeIcon === 'user' && styles.activeIcon]} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleIconPress('shopping-cart')} style={styles.iconContainer}>
                        {activeIcon === 'shopping-cart' && <View style={styles.activeTopBar} />}
                        <FontAwesome name="shopping-cart" style={[styles.icon, activeIcon === 'shopping-cart' && styles.activeIcon]} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleIconPress('bars')} style={styles.iconContainer}>
                        {activeIcon === 'bars' && <View style={styles.activeTopBar} />}
                        <FontAwesome name="bars" style={[styles.icon, activeIcon === 'bars' && styles.activeIcon]} />
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View>
    )
}

export default BottomTabBar
const styles = {
    container: {
        flex: 1,
        width: '100%',
        position: 'relative',
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
