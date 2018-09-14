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
export default class PackagePage extends Component {
  static navigationOptions = {
    title: 'PackagePage',
    header: null
  }
  constructor(props){
    super(props);
  }
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
                           How big the Package do you need?
                        </Text>
                    </View>

                    <View style={styles.buttonContainer}>

                        <TouchableOpacity style={styles.button1pack}
                        onPress={()=>this.props.navigation.navigate('FinalPage', this.props.package = 1 )}> 
                            <Image  
                                style={styles.buttonImage}
                                source={require('../src/Images/TypeButton.png')}
                                style={{justifyContent:'center', alignContent:'center'}}
                            >
                                <Text style={[styles.Text1pack, {backgroundColor:"transparent"}]}>
                                    1 Pack
                                </Text>

                            </Image> 
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button2pack}
                        onPress={()=>this.props.navigation.navigate('FinalPage', this.props.package = 2 )}> 
                            <Image  
                                style={styles.buttonImage}
                                source={require('../src/Images/TypeButton.png')}
                                style={{justifyContent:'center', alignContent:'center'}}
                            >
                                <Text style={[styles.Text2pack, {backgroundColor:"transparent"}]}>
                                    2 Pack
                                </Text>
                            </Image>

                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button3pack}
                        onPress={()=>this.props.navigation.navigate('FinalPage', this.props.package = 3 )}> 
                            <Image  
                                style={styles.buttonImage}
                                source={require('../src/Images/TypeButton.png')}
                                style={{justifyContent:'center', alignContent:'center'}}
                            > 
                                <Text style={[styles.Text3pack, {backgroundColor:"transparent"}]}>
                                    3 Pack
                                </Text>
                            </Image>
                        </TouchableOpacity>
                            

                        <TouchableOpacity style={styles.button4pack}
                        onPress={()=>this.props.navigation.navigate('FinalPage')}>
                            <Image  
                                style={styles.buttonImage}
                                source={require('../src/Images/TypeButton.png')}
                                style={{justifyContent:'center', alignContent:'center'}}
                            > 
                                <Text style={[styles.Text4pack, {backgroundColor:"transparent"}]}>
                                    4 Pack
                                </Text>
                            </Image>
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
    button1pack:{
        borderColor: 'white',        
        backgroundColor: 'transparent',
        justifyContent: 'center'
    },    
    button2pack:{
        borderColor: 'white',        
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    button3pack:{
        borderColor: 'white',        
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },    
    button4pack:{
        borderColor: 'white',        
        backgroundColor: 'transparent',
        justifyContent: 'center',
    }


});

module.exports = PackagePage;