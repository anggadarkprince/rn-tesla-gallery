import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

function ImageFeature({title, image}) {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Image style={styles.image} source={image}/>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {color: 'white', fontSize: 27, textAlign: 'center', fontWeight: 'bold', marginBottom: 50},
    image: {width: '100%', height: 400, resizeMode: 'cover'}
});

export default ImageFeature;