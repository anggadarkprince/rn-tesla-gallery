import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Video} from "expo-av";

function StaticFeatures({features}) {
    return features.map((feature, idx) => (
        <View style={styles.featureWrapper} key={`static-feature-${idx}`}>
            {feature.video ? <Video
                source={feature.video}
                shouldPlay={true}
                resizeMode="contain"
                style={styles.video}
                isLooping={true}
            /> : <Image style={styles.image} source={feature.image}/>}
            <View style={styles.contentWrapper}>
                <Text style={styles.title}>{feature.title}</Text>
                <Text style={styles.description}>{feature.description}</Text>
            </View>
        </View>
    ));
}

const styles = StyleSheet.create({
    featureWrapper: {marginBottom: 40},
    video: {width: '100%', height: 230},
    image: {width: '100%', height: 220, resizeMode: 'cover', marginBottom: 20},
    contentWrapper: {marginHorizontal: 20},
    title: {color: 'white', fontWeight: 'bold', marginBottom: 10, fontSize: 16},
    description: {color: 'white', marginBottom: 15}
});

export default StaticFeatures;