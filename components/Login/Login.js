import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    Button,
    Dimensions,
  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginForm from './LoginForm';

export default class Login extends Component {
    static navigationOptions = {
        header: null ,
        title: 'Login',
        drawerLabel: 'Sign Out',
        drawerIcon: ({ tintColor }) => (
            <Image
              source={require('../../images/mvmenusignout.png')}
              style={[styles.icon, {tintColor: tintColor}]}
            />
        ),          
      };    
    render() {
        global.MenuDrawerOpen = false;         
        const { navigate } = this.props.navigation;
        const resizeMode = 'center';
        console.log('888999 1001 b the window width is ', Dimensions.get('window').width);
        
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../images/sbanking_bg1.png')} 
                    style={styles.mybackground}>
                    <View style={styles.logocontainer}> 
                        <Image
                            style={styles.logo}
                            source={require('../../images/sbanking_logo1.png')}                   
                        />
                        <LoginForm navigate = { navigate } />

                    </View>
                </ImageBackground>

                
            </View>
        ) 
        
    }
}

const styles = StyleSheet.create({

    mybackground: {
        flex: 1,
        width: Dimensions.get('window').width,

        //resizeMode: 'cover', // or 'stretch'
        // remove width and height to override fixed static size
        //width: null,
        //height: null,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

    },
    logo: {
        width: 280,
        height: 50,  
    },
    logocontainer: {
        alignItems: 'center',
        marginTop: 150,
        flexGrow: 1,
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });