//import liraries
import React, { Component } from 'react';
import { 
    Button,
    View, 
    Text, 
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image } from 'react-native';

// global constant
const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height
const BUTTONBORDERWIDTH = 2.5
const BUTTONBORDERRAD = 10

// create a component
export default class typePage extends Component {
  static navigationOptions = {
    title: 'TypePage',
    header: null
  };
  constructor(props){
    super(props);
  };

//   console.log(this.props)

      render() {
          return (
              <View style={styles.container}>
                <Image
                  style={styles.background}
                  source={require('../src/Images/plain.png')}>
                    <View style={styles.toolbarContainer}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
                            <Image  
                                style={styles.toolbarButton}
                                source={require('../src/Images/BackArrow.png')}
                            />
                            <Text style={styles.toolbarTitle}>
                                Back
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.splitLine}></View>

                    <View style={styles.sloganContainer}>
                         <Text style={styles.slogan}>
                           What type of bulb do you need?
                        </Text>
                    </View>

                    <View style={styles.buttonContainer}>

                        <TouchableOpacity style={styles.buttonLED}
                        onPress={() => this.props.navigation.navigate('WattPage', this.props.type = "LED")}> 
                            <Image  
                                style={styles.buttonImage}
                                source={require('../src/Images/Typepage/LEDButton.png')}
                            /> 
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonHalogen}
                        onPress={() => this.props.navigation.navigate('WattPage', this.props.type = "Halogen")}> 
                            <Image  
                                style={styles.buttonImage}
                                source={require('../src/Images/Typepage/HalogenButton.png')}
                            /> 
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonIncandescent}
                        onPress={() => this.props.navigation.navigate('WattPage', this.props.type = "Incandescent")}> 
                            <Image  
                                style={styles.buttonImage}
                                source={require('../src/Images/Typepage/IncanButton.png')}
                            /> 
                        </TouchableOpacity>
                            
                    </View>
                  </Image>
              </View>
          );
      }

  }
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },       
    toolbarContainer: {
        backgroundColor: 'rgba(255,255,255, 0.0)',
        flexDirection:'row'
    },    
    toolbarButton:{
        height: 25,
        top: SCREEN_HEIGHT / 20,
        left: SCREEN_WIDTH / 33

    },
    toolbarTitle:{
        backgroundColor: 'rgba(255,255,255, 0.0)',
        color:'white',
        textAlign:'center',
        top: SCREEN_HEIGHT / 300,
        left: SCREEN_WIDTH / 10,
        fontSize:30
    },  
    splitLine: {
        top: SCREEN_HEIGHT / 100,
        paddingTop: 2,
        backgroundColor: 'white'
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
    buttonContainer:{
        flex: 1,
        top:SCREEN_HEIGHT /7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonLED:{
        borderColor: 'white',        
        backgroundColor: 'transparent',
        justifyContent: 'center'
    },
    buttonIncandescent:{
        borderColor: 'white',        
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    buttonHalogen:{
        borderColor: 'white',        
        backgroundColor: 'transparent',
        justifyContent: 'center',
    }

});

module.exports = typePage;