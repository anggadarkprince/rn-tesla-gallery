import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {OutlineButton} from "../Button";

function CarModelHero({car, image, imageStyle, ctaShown, titleShown}) {
    return (
        <ImageBackground style={[styles.image, imageStyle || {}]} source={image || car.hero}>
            {(titleShown === undefined ? true : ctaShown) && (
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{car.model}</Text>
                    <Text style={styles.subtitle}>{car.type}</Text>
                </View>
            )}
            <View style={styles.performanceContainer}>
                <View style={styles.performanceInfoContainer}>
                    {
                        car.performances.filter((perf) => perf.main).map((performance, index) => (
                            <View key={`performance-${index}`}>
                                <Text style={styles.performanceIndicatorValue}>{performance.value}</Text>
                                <Text style={styles.performanceIndicator}>{performance.indicator}</Text>
                            </View>
                        ))
                    }
                </View>
                {(ctaShown === undefined ? true : ctaShown) && <OutlineButton type="secondary" content={"Order Now"} onPress={() => console.log}/>}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        height: 700,
        width: '100%',
        resizeMode: 'cover',
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
    },
    performanceContainer: {
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 50,
        width: '100%'
    },
    performanceInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 30
    },
    performanceIndicatorValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    performanceIndicator: {
        fontSize: 14,
        color: 'white',
    }
});

export default CarModelHero;