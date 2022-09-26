import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function FlatButton(props) {
    const type = props.type;
    const backgroundColor = type === 'primary' ? 'black' : 'white';
    const textColor = type === 'primary' ? 'white' : 'black';

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, {backgroundColor}]} onPress={props.onPress}>
                <Text style={[styles.text, {color: textColor}]}>
                    {props.content}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 10
    },
    button: {
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
});

export default FlatButton;