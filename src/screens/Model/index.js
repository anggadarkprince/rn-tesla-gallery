import React from 'react';
import {StyleSheet, View, Text, ImageBackground, Image, ScrollView} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import Header from "../../components/Header";
import {StatusBar} from "expo-status-bar";
import {OutlineButton} from "../../components/Button";
import {CarouselFeatures, StaticFeatures} from "../../components/CarFeature";

const interiorFeatures = [
    {
        video: require('../../../assets/models/model-s/TTVX74_Model-S-Interior-Carousel-1-Cinematic-Display-Desktop.mp4'),
        title: 'Cinematic Experience',
        description: 'A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.'
    },
    {
        video: require('../../../assets/models/model-s/GV3RMO_Model_S_Plaid_-_Carousel_-_Yoke_-_Desktop_1260x580_HR.mp4'),
        title: 'Yoke Steering',
        description: 'A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.'
    },
    {
        video: require('../../../assets/models/model-s/SJB3NJ_Model_S_Plaid_-_Carousel_-_HVAC_-_Desktop_1260x580__1.mp4'),
        title: 'Perfect Environment',
        description: 'Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.'
    },
    {
        video: require('../../../assets/models/model-s/166R33_MS-Interior-Carousel-4-Rear-Seats-Desktop-2000_HPPOND.mp4'),
        title: 'Redesigned Second Row',
        description: 'Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.'
    },
    {
        video: require('../../../assets/models/model-s/LL2EQG_MS-Interior-Carousel-5-Gaming-Mobile_TB6BF4.mp4'),
        title: 'Console-Grade Gaming',
        description: 'Up to 10 teraflops of processing power unlock in-car gaming on-par with today’s newest consoles. Play from any seat with wireless controller and headset compatibility.'
    },
];

const staticFeatures = [
    {
        image: require('../../../assets/models/model-s/MS-Interior-Grid-A-Desktop.jpg'),
        title: 'Stay Connected',
        description: 'Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.'
    },
    {
        video: require('../../../assets/models/model-s/PIUCZZ_MS-Interior-Grid-2-Audio-Desktop_CLFX4X.mp4'),
        title: 'Immersive Sound',
        description: 'A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.'
    },
    {
        image: require('../../../assets/models/model-s/MS-Interior-Grid-D-Desktop.jpg'),
        title: 'Room for Everything',
        description: 'With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too.'
    },
];

function ModelScreen() {
    return (
        <View style={styles.container}>
            <Header/>
            <ScrollView style={{height: '100%'}}>
                <View style={{backgroundColor: 'black'}}>
                    <ImageBackground style={styles.image} source={require('../../../assets/models/model-s/Model-S-Main-Hero-Mobile-LHD.jpg')}>
                        <View style={styles.titleWrapper}>
                            <Text style={styles.title}>Model S</Text>
                            <Text style={styles.subtitle}>Plaid</Text>
                        </View>
                        <View style={styles.performanceContainer}>
                            <View style={styles.performanceInfoContainer}>
                                <View>
                                    <Text style={styles.performanceIndicatorValue}>396 mi</Text>
                                    <Text style={styles.performanceIndicator}>Range (EPA est.)</Text>
                                </View>
                                <View>
                                    <Text style={styles.performanceIndicatorValue}>1.99 s</Text>
                                    <Text style={styles.performanceIndicator}>0-60 mph</Text>
                                </View>
                                <View>
                                    <Text style={styles.performanceIndicatorValue}>200 mph</Text>
                                    <Text style={styles.performanceIndicator}>Top Speed</Text>
                                </View>
                            </View>
                            <OutlineButton type="secondary" content={"Order Now"} onPress={() => console.log}/>
                        </View>
                    </ImageBackground>
                    <View>
                        <Text style={{color: 'white', fontSize: 27, textAlign: 'center', fontWeight: 'bold', marginBottom: 50}}>Interior of the Future</Text>
                        <Image style={{width: '100%', height: 400, resizeMode: 'cover'}} source={require('../../../assets/models/model-s/MS-Interior-Hero-Mobile.jpg')}/>
                    </View>
                    <CarouselFeatures features={interiorFeatures} delay={2000}/>

                    <StaticFeatures features={staticFeatures}/>
                </View>
                <View style={{backgroundColor: 'white'}}>
                    <ImageBackground style={[styles.image, {height: 400}]} source={require('../../../assets/models/model-s/Model-S-Performance-Hero-Mobile-LHD.jpg')}>
                        <View style={[styles.performanceContainer, {bottom: 20}]}>
                            <View style={styles.performanceInfoContainer}>
                                <View>
                                    <Text style={styles.performanceIndicatorValue}>1,020 hp</Text>
                                    <Text style={styles.performanceIndicator}>Range (EPA est.)</Text>
                                </View>
                                <View>
                                    <Text style={styles.performanceIndicatorValue}>9.23 s</Text>
                                    <Text style={styles.performanceIndicator}>@155 mph 1/4 mile</Text>
                                </View>
                                <View>
                                    <Text style={styles.performanceIndicatorValue}>1.99 s</Text>
                                    <Text style={styles.performanceIndicator}>0-60 mph</Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={{marginHorizontal: 20, marginVertical: 30}}>
                        <Text style={{fontSize: 14, fontWeight: 'light'}}>Plaid</Text>
                        <Text style={{fontSize: 22, fontWeight: 'bold', marginBottom: 10}}>Beyond Ludicrous</Text>
                        <Text style={{marginBottom: 20}}>Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation. Chat with a Tesla Advisor to learn more about Model S.</Text>
                        <OutlineButton type="primary" content={"Order Now"} onPress={() => console.log}/>
                    </View>
                    <View style={{backgroundColor: '#f3f3f3', paddingHorizontal: 20, paddingVertical: 30}}>
                        <Text style={{fontSize: 22, fontWeight: 'bold', marginBottom: 10}}>Electric Powertrain</Text>
                        <Text style={{marginBottom: 20}}> Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.</Text>
                        <OutlineButton type="primary" content={"Order Now"} onPress={() => console.log}/>
                    </View>
                </View>
            </ScrollView>

            <StatusBar style="auto"/>
        </View>
    );
}

const MODEL_SCREEN = 'Model';

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

export {ModelScreen, MODEL_SCREEN};