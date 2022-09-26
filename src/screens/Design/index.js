import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from "../../components/Header";
import {StatusBar} from "expo-status-bar";

function DesignScreen() {
    return (
        <View style={styles.container}>
            <Header/>
            <Text>Design detail</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

const DESIGN_SCREEN = 'Design';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export {DesignScreen, DESIGN_SCREEN};