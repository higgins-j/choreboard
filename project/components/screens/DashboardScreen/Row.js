import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '1%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        marginLeft: 12,
        fontSize: 16
    }
});

const Row = (props) => (
    <View style = {styles.container}>
        <Text style = {styles.text}>
            {`${props.place}    ${props.name.first} ${props.name.last}    ${props.points} points`}
        </Text>
    </View>
);

export default Row;