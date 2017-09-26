import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    SectionList,
  } from 'react-native';
import { StackNavigator } from 'react-navigation';

// to install lodash:
/**
 *      npm i -g npm
 *      npm i --save lodash
 * 
 * or yarn install:
 * 
 *      yarn add lodash
 * 
 */
import _ from 'lodash';
import scotiaCardProfileData from './mock-ScotiaCardProfileInq-rs.json';

let accountList = scotiaCardProfileData[0].accountList;
accountList = _.groupBy(accountList, d => d.category);
accountList = _.reduce(accountList, (acc, next, index) => {
    acc.push({
        key: index,
        data: next
    })
    return acc
    }
    , []
);

export default class AccountsummaryhomePage extends Component {
    
    static navigationOptions = {
        title: <Text style={ {color: 'white'} } >Account Summary</Text>,
        drawerLabel: 'Account Summary',
        drawerIcon: ({ tintColor }) => (
            <Image
              source={require('../../images/mvmenuaccounts.png')}
              style={[styles.icon, {tintColor: tintColor}]}
            />
        ),        
      };     
    renderAccount = (item) => {
        return (
            <View style={styles.rowViewContainer}>
                <View style={styles.accountnameContainer}>
                    <Text style={styles.accountname}>{item.item.accountName}</Text>                   
                    <Text style={styles.text}>{item.item.id.substring(item.item.id.length-5, item.item.id.length)}</Text>
                </View>
                <View style={styles.balanceContainer}>
                    <Text style={ (item.item.balance_amt >= 0) ? styles.balance : styles.balanceNegative}>
                        {item.item.balance ? item.item.balance : ""}</Text>
                </View>
            </View>
        );
    };
    renderCategory = (headerItem) => {
        return <Text style={styles.header}>{headerItem.section.key}</Text>
    };

    render() {
        global.MenuDrawerOpen = false; 
        return (
            <View style={styles.container}>

                <SectionList
                    renderItem={this.renderAccount}
                    renderSectionHeader={this.renderCategory}
                    sections={accountList}
                    keyExtractor={(item) => item.accountKey}
                />                             
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
    myheader: {
        color: 'white',
    },
    rowViewContainer: {
        flex: 1,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 0.5,
        borderColor: '#c9c9c9',
        flexDirection: 'row',
        alignItems: 'center',
    },    
    text: {
      fontSize: 12,
      color: 'rgba(0,0,0,.5)',
    },
    accountnameContainer: {
        flex: 1,
    },
    accountname: {
        fontSize: 14,
        color: 'black',
    },
    balanceContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    balance: {       
        fontSize: 14,
        color: 'black',
    },
    balanceNegative: {       
        fontSize: 14,
        color: 'red',
    },    
    header: {
      fontSize: 20,
      color: 'white',
      backgroundColor: 'gray',
    },
  
  });