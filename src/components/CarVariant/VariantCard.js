import React from 'react';
import {StyleSheet, View, Text, useWindowDimensions, TouchableOpacity} from 'react-native';

function VariantCard({variant, active, lastItem, onPress}) {
    const width = useWindowDimensions().width;

    return (
        <TouchableOpacity style={{ marginStart: 20, marginEnd: lastItem ? 20 : 0, width: width - 100}} onPress={onPress}>
            <View style={[styles.variantContainer, {borderColor: active ? 'black' : 'grey'}]}>
                <Text style={[styles.variantModel, {color: active ? 'black' : 'grey'}]}>{variant.model} {variant.type}</Text>
                <Text style={[styles.variantDescription, {color: active ? 'black' : 'grey'}]}>{variant.description}</Text>
                {variant.performances.map((item, index) => (
                    <View key={`variant-${variant.model}-${index}`} style={styles.variantItemValue}>
                        <Text style={[styles.variantValue, {color: active ? 'black' : 'grey'}]}>{item.value}</Text>
                        <Text style={styles.variantIndicator}>{item.indicator}</Text>
                    </View>
                ))}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    variantContainer: {padding: 20, borderTopWidth: 3, borderColor: 'black'},
    variantModel: {marginBottom: 15, fontWeight: 'bold', fontSize: 16},
    variantDescription: {marginBottom: 15},
    variantItemValue: {marginBottom: 15},
    variantValue: {fontSize: 20, fontWeight: 'bold'},
    variantIndicator: {color: '#777'},
});

export default VariantCard;