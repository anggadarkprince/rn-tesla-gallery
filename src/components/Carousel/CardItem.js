import React from 'react';
import {StyleSheet, View, Text, useWindowDimensions, TouchableOpacity} from 'react-native';

function CardItem({item, active, lastItem, customContent, onPress}) {
    const width = useWindowDimensions().width;

    const content = customContent ? customContent(item, active, lastItem) : (
        <>
            <Text style={[styles.title, {color: active ? 'black' : 'grey'}]}>{item.title}</Text>
            <Text style={[styles.description, {color: active ? 'black' : 'grey'}]}>{item.description}</Text>
        </>
    );

    return (
        <TouchableOpacity style={{ marginStart: 20, marginEnd: lastItem ? 20 : 0, width: width - 100}} onPress={onPress}>
            <View style={[styles.container, {borderColor: active ? 'black' : 'grey'}]}>
                {content}
                {(item.details || []).map((item, index) => (
                    <View key={`detail-${index}`} style={styles.detailWrapper}>
                        <Text style={[styles.detailValue, {color: active ? 'black' : 'grey'}]}>{item.value}</Text>
                        <Text style={styles.detailIndicator}>{item.indicator}</Text>
                    </View>
                ))}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {padding: 20, borderTopWidth: 3, borderColor: 'black'},
    title: {marginBottom: 15, fontWeight: 'bold', fontSize: 16},
    description: {marginBottom: 15},
    detailWrapper: {marginBottom: 15},
    detailValue: {fontSize: 20, fontWeight: 'bold'},
    detailIndicator: {color: '#777'},
});

export default CardItem;