import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import Header from "../../components/Header";
import {StatusBar} from "expo-status-bar";
import {OutlineButton} from "../../components/Button";
import {CarouselFeatures, ImageFeature, StaticFeatures} from "../../components/CarFeature";
import {VariantList} from "../../components/CarVariant";
import {CarModelHero} from "../../components/CarHero";

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

const variants = [
    {
        model: 'Model S',
        type: '',
        hero: require('../../../assets/models/model-s/Model-S-Main-Hero-Mobile-LHD.jpg'),
        performanceImage: require('../../../assets/models/model-s/Model-S-Performance-Hero-Mobile-LHD.jpg'),
        image: require('../../../assets/models/model-s/Model-S-Performance-Dual-Motor-Mobile.jpg'),
        description: 'Dual Motor All-Wheel Drive unlocks more range than any other vehicle in our current lineup, with insane power and maximum control.',
        performances: [
            {'value': '3.1 s', 'indicator': '0-60 mph', main: true},
            {'value': '405 mi', 'indicator': 'Range (EPA Est.)', main: true},
            {'value': '60 hp', 'indicator': 'Peak Power', main: true},
            {'value': '180 mph', 'indicator': 'Top Speed', main: false},
        ],
    },
    {
        model: 'Model S',
        type: 'Plaid',
        hero: require('../../../assets/models/model-s/Model-S-Main-Hero-Mobile-LHD.jpg'),
        performanceImage: require('../../../assets/models/model-s/Model-S-Performance-Hero-Mobile-LHD.jpg'),
        image: require('../../../assets/models/model-s/Model-S-Performance-Tri-Motor-Mobile.jpg'),
        description: 'Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor All-Wheel Drive, featuring torque vectoring and three independent carbon-sleeved rotors.',
        performances: [
            {'value': '1.99 s', 'indicator': '0-60 mph', main: true},
            {'value': '396 mi', 'indicator': 'Range (EPA Est.)', main: true},
            {'value': '1,020 hp', 'indicator': 'Peak Power', main: true},
            {'value': '200 mph', 'indicator': 'Top Speed', main: false},
        ],
        exteriors: [
            {
                image: {uri: 'https://tesla-cdn.thron.com/delivery/public/image/tesla/29bf097c-c1b5-4b46-b2b0-d2f4c00c686d/bvlatuR/std/3949x2217/Model-S-Exterior-Grid-A-Mobile-Global'},
                title: 'Relentless Performance',
                description: 'Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road.'
            },
            {
                video: {uri: 'https://tesla-cdn.thron.com/delivery/public/image/tesla/a1725f15-9dc1-45b9-bdea-d34de393557d/bvlatuR/std/3840x2156/Model-S-Exterior-Grid-B-Mobile-Global'},
                title: 'Optimized Aerodynamics',
                description: 'Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth.'
            },
            {
                image: {uri: 'https://tesla-cdn.thron.com/delivery/public/image/tesla/10daec58-1d1c-4037-8896-d9c72aaf34d7/bvlatuR/std/3657x2039/Model-S-Exterior-Grid-C-Mobile-Global'},
                title: 'Refined Styling',
                description: 'An iconic silhouette meets refreshed, elegant proportions.'
            },
        ]
    },
];

function ModelScreen() {
    return (
        <View style={styles.container}>
            <Header/>
            <ScrollView style={{height: '100%'}}>
                <View style={{backgroundColor: 'black'}}>
                    <CarModelHero car={variants[1]}/>

                    <ImageFeature title="Interior of the Future" image={require('../../../assets/models/model-s/MS-Interior-Hero-Mobile.jpg')}/>

                    <CarouselFeatures features={interiorFeatures} delay={15000}/>

                    <StaticFeatures features={staticFeatures}/>
                </View>
                <View style={{backgroundColor: 'white'}}>
                    <CarModelHero
                        car={variants[0]}
                        image={require('../../../assets/models/model-s/Model-S-Performance-Hero-Mobile-LHD.jpg')}
                        imageStyle={{height: 450}}
                        ctaShown={false}
                        titleShown={false}
                    />

                    <View style={{marginHorizontal: 20, marginVertical: 30}}>
                        <Text style={{fontSize: 14, fontWeight: 'light'}}>Plaid</Text>
                        <Text style={{fontSize: 22, fontWeight: 'bold', marginBottom: 10}}>Beyond Ludicrous</Text>
                        <Text style={{marginBottom: 20}}>Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation. Chat with a Tesla Advisor to learn more about Model S.</Text>
                        <OutlineButton type="primary" content={"Order Now"} onPress={() => console.log}/>
                    </View>
                    <View style={{backgroundColor: '#f3f3f3'}}>
                        <View style={{paddingHorizontal: 20, paddingVertical: 30}}>
                            <Text style={{fontSize: 22, fontWeight: 'bold', marginBottom: 10}}>Electric Powertrain</Text>
                            <Text>Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.</Text>
                        </View>
                        <VariantList variants={variants}/>
                    </View>
                </View>

                <View style={{backgroundColor: 'black'}}>
                    <Image style={{resizeMode: 'cover', height: 300, width: '100%'}} source={require('../../../assets/models/model-s/Model-S-Exterior-Hero-Mobile-Global.jpg')}/>
                    <View style={{padding: 20, marginBottom: 40}}>
                        <Text style={{color: 'white'}}>Exterior</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white', marginBottom: 15}}>Designed for Efficiency</Text>
                        <Text style={{color: 'white', marginBottom: 20}}>With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence.</Text>
                        <OutlineButton type="secondary" content={"Order Now"} onPress={() => console.log}/>
                    </View>

                    <StaticFeatures features={variants[1].exteriors}/>
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
});

export {ModelScreen, MODEL_SCREEN};