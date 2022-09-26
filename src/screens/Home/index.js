import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from "../../components/Header";
import CarList from "../../components/CarList";
import {StatusBar} from "expo-status-bar";

function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Header navigation={navigation}/>
            <CarList/>
            <StatusBar style="auto"/>
        </View>
    );
}

const HOME_SCREEN = 'Home';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export {HomeScreen, HOME_SCREEN};