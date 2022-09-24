import React from 'react';
import {FlatList, View, StyleSheet, Dimensions} from "react-native";
import cars from "../../cars";
import CarItem from "../CarItem";

function CarList() {
    return (
        <View style={styles.carListContainer}>
            <FlatList
                data={cars}
                renderItem={({item}) => <CarItem car={item}/>}
                snapToAlignment="start"
                decelerationRate="normal"
                snapToInterval={Dimensions.get('screen').height}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    carListContainer: {
        width: '100%',
        height: '100%',
    },
});

export default CarList;