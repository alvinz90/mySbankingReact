import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
  } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class TransferPage extends Component {
    static navigationOptions = {
        title: <Text style={ {color: 'white'} } >Fund Transfer</Text>,
        drawerLabel: 'Fund Transfer',
        drawerIcon: ({ tintColor }) => (
            <Image
              source={require('../../images/mvmenutransfers.png')}
              style={[styles.icon, {tintColor: tintColor}]}
            />
        ),        
      };
      render() {
        global.MenuDrawerOpen = false; 
        return (
            <View style={styles.container}>
                <Image source={require('../../images/underconstruction.jpg')} />                            
            </View>
        )         
    }      
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
  
      backgroundColor: '#F5FCFF',
      padding: 5,
      paddingTop: 5,
    },
    icon: {
        width: 24,
        height: 24,
    },     

  });