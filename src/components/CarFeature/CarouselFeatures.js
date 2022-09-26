import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Video} from "expo-av";

function CarouselFeatures({features, delay, autoStart}) {
    const [index, setIndex] = useState(0);

    if (autoStart) {
        useEffect(() => {
            const interval = setInterval(() => {
                setIndex(index => {
                    const currentIndex = index + 1;
                    if (currentIndex >= features.length) {
                        return 0;
                    }
                    return currentIndex;
                });
            }, delay || 5000);
            return () => clearInterval(interval);
        }, []);
    }

    return (
        <View style={styles.featureWrapper}>
            <Video
                source={features[index].video}
                shouldPlay={true}
                resizeMode="contain"
                style={styles.video}
                isLooping={true}
            />
            <View style={styles.contentWrapper}>
                <View style={styles.paginationWrapper}>
                    {features.map((item, idx) => <View
                        style={[styles.pagination, {backgroundColor: index === idx ? '#ffffff' : '#888888'}]}/>)}
                </View>
                <Text style={styles.title}>{features[index].title}</Text>
                <Text style={styles.description}>{features[index].description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    featureWrapper: {marginBottom: 40},
    video: {width: '100%', height: 230},
    contentWrapper: {marginHorizontal: 20},
    paginationWrapper: {flexDirection: 'row', marginBottom: 20},
    pagination: {width: 10, height: 10, borderRadius: 5, marginEnd: 10},
    title: {color: 'white', fontWeight: 'bold', marginBottom: 10, fontSize: 16},
    description: {color: 'white', marginBottom: 15}
});

export default CarouselFeatures;