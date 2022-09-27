import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import Header from "../../components/Header";
import {StatusBar} from "expo-status-bar";
import {OutlineButton} from "../../components/Button";
import {CarouselFeatures, ImageFeature, StaticFeatures, SectionFeature} from "../../components/CarFeature";
import {VariantList} from "../../components/CarVariant";
import {CarModelHero} from "../../components/CarHero";
import {CarouselCard} from "../../components/Carousel";

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
        exteriorFeature: {
            featured: {
                type: 'image',
                source: require('../../../assets/models/model-s/Model-S-Exterior-Hero-Mobile-Global.jpg')
            },
            label: 'Exterior',
            feature: 'Designed for Efficiency',
            description: 'With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence.'
        },
        accelerationFeature: {
            label: 'Plaid',
            feature: 'Beyond Ludicrous',
            description: 'Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation. Chat with a Tesla Advisor to learn more about Model S.'
        },
        mileageFeature: {
            featured: {
                type: 'video',
                source: {uri: 'https://tesla-cdn.thron.com/delivery/public/video/tesla/b0027831-1bb2-463c-bacd-905389c33a9a/bvlatuR/WEBHD/MS-Range-Hero-Mobile'}
            },
            label: 'Range',
            feature: 'Go Anywhere',
            description: 'With up to 405 miles of estimated range and access to the world’s largest and most powerful fast charging network, you’ll spend less time plugged in and more time on the road. Chat with a Tesla Advisor to learn more about Model S.'
        },
        safetyFeature: {
            featured: {
                type: 'image',
                source: {uri: 'https://tesla-cdn.thron.com/delivery/public/image/tesla/9dbc96d7-f4ab-42d8-a044-fa067b2db86e/bvlatuR/std/1570x1864/Model-S-Safety-Hero-Mobile-Global-960x1140'}
            },
            label: 'Safety',
            feature: 'High Impact Protection',
            description: 'Model S is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection and low rollover risk. Every new Model S includes Tesla’s latest active safety features, such as Automatic Emergency Braking, at no extra cost.'
        },
        drivingFeature: {
            featured: {
                type: 'image',
                source: {uri: 'https://tesla-cdn.thron.com/delivery/public/image/tesla/a637a5e9-c033-4774-b654-e1a27c2cf0b4/bvlatuR/std/1600x1900/Autopilot-Hero-Vision-Mobile'}
            },
            label: 'Autopilot',
            feature: 'Future of Driving',
            description: ' Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly. Chat with a Tesla Advisor to learn more about Model S.'
        },
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
        ],
    },
];

const autopilots = [
    {
        featured: {
            type: 'video',
            source: {uri: 'https://tesla-cdn.thron.com/delivery/public/video/tesla/74b8f01e-5020-438b-be44-446e5975c54c/bvlatuR/WEBHD/Model_S_Navigate_0'}
        },
        title: 'Navigate on Autopilot',
        description: 'Active guidance from on-ramp to off-ramp'
    },
    {
        featured: {
            type: 'video',
            source: {uri: 'https://tesla-cdn.thron.com/static/A7I6LP_lane_change_0.mp4-2000_PYSUF4.mp4'}
        },
        title: 'Auto Lane Change',
        description: 'Automatically change lanes while driving on the highway'
    },
    {
        featured: {
            type: 'video',
            source: {uri: 'https://tesla-cdn.thron.com/delivery/public/video/tesla/14877527-9b58-40e9-8a5e-fc47c4afb126/bvlatuR/WEBHD/summon_1'}
        },
        title: 'Summon',
        description: 'Automatically retrieve your car'
    },
    {
        featured: {
            type: 'video',
            source: {uri: 'https://tesla-cdn.thron.com/delivery/public/video/tesla/53faf083-f129-4c48-a28f-0f56c8ca5d90/bvlatuR/WEBHD/parking'}
        },
        title: 'Autopark',
        description: 'Parallel and perpendicular parking with a single touch'
    },
];

function ModelScreen() {
    return (
        <View style={styles.container}>
            <Header/>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.darkSection}>
                    <CarModelHero car={variants[1]}/>

                    <ImageFeature title="Interior of the Future" image={require('../../../assets/models/model-s/MS-Interior-Hero-Mobile.jpg')}/>

                    <CarouselFeatures features={interiorFeatures} delay={15000}/>

                    <StaticFeatures features={staticFeatures}/>
                </View>
                <View style={styles.lightSection}>
                    <CarModelHero
                        car={variants[0]}
                        image={require('../../../assets/models/model-s/Model-S-Performance-Hero-Mobile-LHD.jpg')}
                        imageStyle={{height: 450}}
                        ctaShown={false}
                        titleShown={false}
                    />

                    <SectionFeature feature={variants[1].accelerationFeature} color="black"/>

                    <View style={{backgroundColor: '#f3f3f3'}}>
                        <View style={{paddingHorizontal: 20, paddingVertical: 30}}>
                            <Text style={{fontSize: 22, fontWeight: 'bold', marginBottom: 10}}>Electric Powertrain</Text>
                            <Text>Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.</Text>
                        </View>
                        <VariantList variants={variants}/>
                    </View>
                </View>

                <View style={styles.darkSection}>
                    <SectionFeature feature={variants[1].exteriorFeature} color="white"/>
                    <StaticFeatures features={variants[1].exteriors}/>
                </View>

                <View style={styles.lightSection}>
                    <SectionFeature feature={variants[1].mileageFeature} color="black"/>
                    <SectionFeature feature={variants[1].safetyFeature} color="black"/>
                    <SectionFeature feature={variants[1].drivingFeature} color="black"/>
                    <SectionFeature feature={{feature: 'Features', description: 'Enhanced Autopilot and Full Self-Driving capability introduce additional features and improve existing functionality to make your car more capable over time, including:'}} color="black" ctaShown={false}/>
                    <CarouselCard items={autopilots}/>
                    <View style={{marginBottom: 20}}>
                        <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white', marginBottom: 15}}>Model S</Text>
                        <View>
                            <OutlineButton type="primary" content={"Order Now"} onPress={() => console.log}/>
                            <OutlineButton type="primary" content={"Compare"} onPress={() => console.log}/>
                        </View>
                        <Image style={styles.image} source={{uri: 'https://tesla-cdn.thron.com/delivery/public/image/tesla/e00bf240-9973-494f-a217-786b736d8dde/bvlatuR/std/3840x2128/Model-S-Order-Hero-Desktop-Mobile-Global'}}/>
                    </View>
                    <Text style={{fontSize: 12, color: 'gray'}}>
                        Certain high data usage vehicle features require at least Standard Connectivity, including maps,
                        navigation and voice commands. Access to features that use cellular data and third-party licenses
                        are subject to change. Learn more about Standard Connectivity and any limitations.
                    </Text>
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
    scrollContainer: {
        height: '100%'
    },
    lightSection: {
        backgroundColor: 'white'
    },
    darkSection: {
        backgroundColor: 'black'
    }
});

export {ModelScreen, MODEL_SCREEN};