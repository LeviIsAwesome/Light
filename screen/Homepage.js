import React, { Component } from 'react';
import { 
  Button,
  Dimensions, 
  Image,
  StyleSheet, 
  Text,
  TouchableOpacity, 
  View
} from 'react-native';

import FileSystem from 'react-native-filesystem';
import {StackNavigator} from 'react-navigation'
import Category from './Category';

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

/**********************************************************
 * Main Class
 **********************************************************/
export default class Homepage extends Component {

  static navigationOptions = {
    title: 'Homepage',
    header: null
  }

  render() {

    var usrChoice = {
      category : "",
      type : "",
      dim : -1,
      color: "",
      pack: 0,
      wattage: 0
  };
    
  // console.log(usrChoice);

    return (
      <View style={styles.container}>
        <Image source={require('../src/Images/plain.png')} >

            <View style={styles.logoContainer}>
                <Image 
                style={styles.logo}
                source={require('../src/Images/Homepage/door.png')}/> 
            </View>

            <View style={styles.sloganContainer}>
                <Text style={styles.slogan}>
                    Bring the Light Home
                </Text>
            </View>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Category', {usrChoice})} >
                <Image  
                    style={styles.buttonContainer}
                    source={require('../src/Images/Homepage/startnow.png')}
                />
            </TouchableOpacity>

        </Image>
      </View>
    );
  }
}

/**********************************************************
 * The style sheet
 **********************************************************/

const styles = StyleSheet.create({
  container: {
    flex :1
  },

  logoContainer: { 
    top: 45,
    left: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo: {
    height: 200,
    width: 200
  },

  sloganContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255, 0.0)',
  },

  slogan: {
    top: 30,
    fontSize: 35,
    color: 'white',
  },

  buttonContainer: {
    top: SCREEN_HEIGHT / 2.2,
    left: SCREEN_WIDTH / 5.8,
  },

  buttonText: {
    fontSize: 25,
    top: 9,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'white',
    textAlign: 'center'
  }

});

module.exports = Homepage  