import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from './Title';

export default class Topbar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Title />
        <Text>Welcome, Blake!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});
