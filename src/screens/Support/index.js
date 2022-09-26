import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from "../../components/Header";
import {StatusBar} from "expo-status-bar";

function SupportScreen() {
    return (
        <View style={styles.container}>
            <Header/>
            <Text>Support detail</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

const SUPPORT_SCREEN = 'Support';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export {SupportScreen, SUPPORT_SCREEN};