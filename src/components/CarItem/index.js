import React from 'react';
import {ImageBackground, StyleSheet, Text, View, Dimensions} from "react-native";
import FlatButton from "../FlatButton";

function CarItem(props) {
    const {name, tagline, taglineCTA, image} = props.car;
    return (
        <View style={styles.carContainer}>
            <ImageBackground style={styles.image} source={image}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>
                        {tagline}
                        {taglineCTA ? <Text style={styles.subtitleCTA}>{taglineCTA}</Text> : null}
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <FlatButton type="primary" content={"Customer Order"} onPress={() => console.log}/>
                    <FlatButton type="secondary" content={"Existing Inventory"} onPress={() => console.log}/>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('screen').height,
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    titleWrapper: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: '#5c5e62'
    },
    subtitleCTA: {
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%'
    }
});

export default CarItem;