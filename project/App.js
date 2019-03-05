import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Topbar from './components/Topbar'

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
        <View style={styles.container}>
          <Topbar />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
  },
});
