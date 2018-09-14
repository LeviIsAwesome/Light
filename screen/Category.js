//import liraries
import React, { Component } from 'react';
import { 
    Button,
    Dimensions,
    Image,
    View,
    Text,
    TouchableOpacity, 
    StyleSheet } from 'react-native';

import TypePage from './TypePage';
import {StackNavigator} from 'react-navigation';

// global constant
const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height
const BUTTONWIDTH = SCREEN_WIDTH / 2.45
const BUTTONHEIGHT = SCREEN_WIDTH / 2.75
const BUTTONBORDERWIDTH = 2.5
const BUTTONBORDERRAD = 10


// create a component
export default class Category extends Component {

  static navigationOptions = {
        header: null
  }
      render() {
          return (
              <View style={styles.container}>
                <Image
                  style={styles.background}
                  source={require('../src/Images/plain.png')}>

                    <View style={styles.toolbarContainer}>
                        <TouchableOpacity onPress={() => {this.props.navigation.goBack(null)}}>
                            <Image  
                                style={styles.toolbarButton}
                                source={require('../src/Images/BackArrow.png')}
                            />
                        </TouchableOpacity>
                        <Text style={styles.toolbarTitle}>
                            Category
                        </Text>
                    </View>

                    <View style={styles.splitLine}>
                    </View>

                    <View style={styles.categoryButtons}>
                        <View style={styles.leftSideButtons}>

                            <TouchableOpacity 
                            style={styles.optStd}
                            onPress={() => this.props.navigation.navigate('TypePage',this.props.category = "std")}> 
                                <Image  
                                    style={styles.optImage}
                                    source={require('../src/Images/Category/Std.png')}
                                /> 
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.optFlood}> 
                                <Image  
                                    style={styles.optImage}
                                    source={require('../src/Images/Category/Flood.png')}
                                /> 
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.optGlobal}> 
                                <Image  
                                    style={styles.optImage}
                                    source={require('../src/Images/Category/Global.png')}
                                /> 
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.optTube}> 
                                <Image  
                                    style={styles.optImage}
                                    source={require('../src/Images/Category/Tube.png')}
                                /> 
                            </TouchableOpacity>
                            
                        </View>

                        <View style={styles.rightSideButtons}>
                            <TouchableOpacity style={styles.optCandelabra}> 
                                <Image  
                                    style={styles.optCandelabraImage}
                                    source={require('../src/Images/Category/Candelabra.png')}
                                /> 
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.optGU10}> 
                                <Image  
                                    style={styles.optImage}
                                    source={require('../src/Images/Category/GU10.png')}
                                /> 
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.optSmall}> 
                                <Image  
                                    style={styles.optSmallImage}
                                    source={require('../src/Images/Category/Small.png')}
                                /> 
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.optTri}> 
                                <Image  
                                    style={styles.optImage}
                                    source={require('../src/Images/Category/Tri.png')}
                                /> 
                            </TouchableOpacity>
                        </View>
                    </View>

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
        top:SCREEN_HEIGHT / 26,
        left: SCREEN_WIDTH / 3.8,
        fontSize:34
    },  
    splitLine: {
        top: 30,
        paddingTop: 2,
        backgroundColor: 'white'
    },
    categoryButtons:{
        flex: 2,
        top:45,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    leftSideButtons:{
        left:34.5,
        flex: 1,
        flexDirection: 'column',
    },
    rightSideButtons:{
        flex: 1,
        flexDirection: 'column',
    },
    optStd: {
        top:BUTTONHEIGHT/25, 
        width: BUTTONWIDTH,
        height: BUTTONHEIGHT, 
        borderRadius:BUTTONBORDERRAD,  
        borderWidth:BUTTONBORDERWIDTH , 
        borderColor: 'white',
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    optFlood: {
        top:BUTTONHEIGHT/20, 
        width: BUTTONWIDTH,
        height: BUTTONHEIGHT, 
        borderRadius:BUTTONBORDERRAD,  
        borderWidth:BUTTONBORDERWIDTH , 
        borderColor: 'white',        
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    optGlobal: {
        top:BUTTONHEIGHT/15, 
        width: BUTTONWIDTH,
        height: BUTTONHEIGHT, 
        borderRadius:BUTTONBORDERRAD,  
        borderWidth:BUTTONBORDERWIDTH , 
        borderColor: 'white',
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    optTube: {
        top:BUTTONHEIGHT/10, 
        width: BUTTONWIDTH,
        height: BUTTONHEIGHT, 
        borderRadius:BUTTONBORDERRAD,  
        borderWidth:BUTTONBORDERWIDTH , 
        borderColor: 'white',
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    optCandelabra: {
        top:BUTTONHEIGHT/25, 
        width: BUTTONWIDTH,
        height: BUTTONHEIGHT, 
        borderRadius:BUTTONBORDERRAD,  
        borderWidth:BUTTONBORDERWIDTH , 
        borderColor: 'white',
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    optGU10: {
        top:BUTTONHEIGHT/20, 
        width: BUTTONWIDTH,
        height: BUTTONHEIGHT, 
        borderRadius:BUTTONBORDERRAD,  
        borderWidth:BUTTONBORDERWIDTH , 
        borderColor: 'white',
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },    
    optSmall: {
        top:BUTTONHEIGHT/15, 
        width: BUTTONWIDTH,
        height: BUTTONHEIGHT, 
        borderRadius:BUTTONBORDERRAD,  
        borderWidth:BUTTONBORDERWIDTH , 
        borderColor: 'white',
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    optTri: {
        top:BUTTONHEIGHT/10, 
        width: BUTTONWIDTH,
        height: BUTTONHEIGHT, 
        borderRadius:BUTTONBORDERRAD,  
        borderWidth:BUTTONBORDERWIDTH , 
        borderColor: 'white',
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    optImage:{
        left:10,
        height: BUTTONHEIGHT / 1,
        width: BUTTONWIDTH / 1.2
    },        
    optCandelabraImage:{
        bottom: 0,
        left: 12,
        height: BUTTONHEIGHT / 1,
        width: BUTTONWIDTH / 1.2
    },
    optSmallImage:{
        left:5,
        height: BUTTONHEIGHT / 1,
        width: BUTTONWIDTH / 1.2
    }
});

module.exports = Category;