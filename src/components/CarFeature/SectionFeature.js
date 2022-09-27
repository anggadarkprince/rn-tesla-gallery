import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Video} from "expo-av";
import {OutlineButton} from "../Button";

function SectionFeature({feature, color, ctaShown}) {
    const featured = feature.featured ? (
        feature.featured.type === 'video' ? <Video
            source={feature.featured.source}
            shouldPlay={true}
            resizeMode="contain"
            style={styles.video}
            isLooping={true}
        /> : <Image style={styles.image} source={feature.featured.source}/>
    ) : null;
    return (
        <View>
            {featured}
            <View style={styles.contentWrapper}>
                <Text style={{color: color}}>{feature.label}</Text>
                <Text style={[styles.title, {color}]}>{feature.feature}</Text>
                <Text style={[styles.description, {color}]}>{feature.description}</Text>
                {(ctaShown === undefined ? true : ctaShown) && <OutlineButton type={color === 'white' ? 'secondary' : 'primary'} content={"Order Now"} onPress={() => console.log}/>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    featureWrapper: {marginBottom: 20},
    video: {width: '100%', height: 230},
    image: {resizeMode: 'cover', height: 300, width: '100%'},
    contentWrapper: {padding: 20, marginBottom: 40},
    title: {fontWeight: 'bold', fontSize: 18, color: 'white', marginBottom: 15},
    description: {color: 'white', marginBottom: 20}
});

export default SectionFeature;