import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Header({navigation}) {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../assets/images/logo.png')}/>
            <TouchableOpacity onPress={() => {
                console.log('press')
                navigation.toggleDrawer();
            }}>
                <Image style={styles.menu} source={require('../../../assets/images/menu.png')}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
    },
    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain',
    },
    menu: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    }
});

export default Header;