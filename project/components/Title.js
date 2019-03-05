import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Title extends React.Component {
  render() {
    return(
      <View style={styles.title}>
        <Text>ChoreBoard</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
  }
});
