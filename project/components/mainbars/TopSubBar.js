import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

export default class TopSubBar extends React.Component {

  state = {
    progressToday: 40,
    progressWeekly: 15/22 * 100,
    progressWithOnComplete: 0,
    progressCustomized: 0
  };

  render() {

    const barWidth = Dimensions.get('screen').width - 40;
    const progressCustomStyles = {
      backgroundColor: 'orange',
      borderRadius: 0,
      borderColor: 'blue'
    };

    return (
      <View style = {styles.container}>
        <View style = {styles.profilePictureContainer}>
          <Image style = {styles.profilePicture} source = {require('../../images/default.jpg')}></Image>
          <Text style = {styles.welcome}>Welcome, Blake!</Text>
          <TouchableOpacity onPress = {() => {return alert("What's this menu?");}} style = {styles.icon}>
            <Icon name = 'dots-three-horizontal' color = 'white' size = {30}></Icon>
          </TouchableOpacity>
        </View>
        <View style = {styles.barContainer}>
          <Text style = {styles.subtitle}>TODAY'S CHORES:</Text>
          <ProgressBarAnimated width = {barWidth} value = {this.state.progressToday} backgroundColorOnComplete = 'lightgreen' />
          <Text style = {styles.subtitleFraction}>2/5</Text>
          <Text style = {styles.subtitle}>TOTAL WEEKLY CHORES:</Text>
          <ProgressBarAnimated width = {barWidth} value = {this.state.progressWeekly} backgroundColorOnComplete = 'lightgreen' />
          <Text style = {styles.subtitleFraction}>15/22</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'silver',
    width: '100%'
  },
  welcome: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: '1%'
  },
  subtitle: {
    color: 'white',
    fontSize: 10,
    alignSelf: 'flex-start',
    padding: '1%'
  },
  subtitleFraction: {
    color: 'white',
    fontSize: 10,
    alignSelf: 'flex-end',
    padding: '1%'
  },
  barContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '1%'
  },
  profilePictureContainer: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: '1%',
    flexDirection: 'row'
  },
  profilePicture: {
    width: 50,
    height: 50,
    position: 'relative',
    alignSelf: 'flex-start',
  },
  icon: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    padding: '1%'
  }

});