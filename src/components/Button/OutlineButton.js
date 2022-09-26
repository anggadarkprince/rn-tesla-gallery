import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function OutlineButton(props) {
    const type = props.type;
    const borderColor = type === 'primary' ? 'black' : 'white';
    const textColor = type === 'primary' ? 'black' : 'white';

    return (
        <TouchableOpacity style={[styles.button, {borderColor}]} onPress={props.onPress}>
            <Text style={[styles.text, {color: textColor}]}>
                {props.content}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
});

export default OutlineButton;