import React from 'react';
import {
  AppRegistry,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import LoginForm from './components/Login/Login';
import AccountsummaryhomePage from './components/accountsummaryhome/accountsummaryhome';
import TransferPage from './components/transfer/transfer';
import BillsPage from './components/bills/bills';
import EmtPage from './components/emt/emt';
import WuPage from './components/wu/wu';
import RdcPage from './components/rdc/rdc';
import PrdsvcPage from './components/prdsvc/prdsvc';
import SettingsPage from './components/settings/settings';

let myDrawer = DrawerNavigator(
    {
        AcctSum: { screen: AccountsummaryhomePage },
        Transfer: { screen: TransferPage },  
        Bills: { screen: BillsPage }, 
        Emt: { screen: EmtPage },   
        Wu: { screen: WuPage },   
        Rdc: { screen: RdcPage },       
        Prdsvc: { screen: PrdsvcPage },     
        Settings: { screen: SettingsPage },             
        Login: { screen: LoginForm },
    },
    {
      initialRouteName: 'Login',
      drawerPosition: 'left',
      drawerWidth: 280,
      contentOptions: {
        style: {
          backgroundColor: '#373737',
          flex: 1,
        },
        labelStyle: {
          color: 'white',
        },
        inactiveTintColor: 'white',
        activeBackgroundColor: 'darkgray',
        activeTintColor: 'white',

      },
    }
  );

  let mySbankingReact = StackNavigator(
    {
        Home: { screen: myDrawer },
    },
    { 
        headerMode: 'float',
        navigationOptions: ({navigation}) => ({
          headerStyle: {backgroundColor: 'red'},
          headerLeft: <TouchableOpacity  
                        onPress={() =>  {
                            /**
                             * 
                            
                            if (mySbankingReact.state == undefined || 
                                mySbankingReact.state == null) {
                                mySbankingReact.state = { DrawerOpen: false };
                            }
                            if (!mySbankingReact.state.DrawerOpen) {
                                navigation.navigate('DrawerOpen'); 
                                mySbankingReact.state = { DrawerOpen: true };
                            } else {
                                navigation.navigate('DrawerClose'); 
                                mySbankingReact.state = { DrawerOpen: false };                                
                            }
                             */

                            console.log('888999 3001 global.MenuDrawerOpen is ', global.MenuDrawerOpen);

                            if (!global.MenuDrawerOpen) {
                                global.MenuDrawerOpen = false;
                            }
                            console.log('888999 3002 global.MenuDrawerOpen is ', global.MenuDrawerOpen);
                            
                            if (!global.MenuDrawerOpen) {
                                navigation.navigate('DrawerOpen'); 
                                global.MenuDrawerOpen = true;
                            } else {
                                navigation.navigate('DrawerClose'); 
                                global.MenuDrawerOpen = false;                              
                            } 
                            console.log('888999 3003 global.MenuDrawerOpen is ', global.MenuDrawerOpen);
                                                       
                        }} 
                      >
                        <Image 
                            source={require('./images/menu.png')}
                            style={{ marginLeft:10, width:36, height:36}}
                          />
                      </TouchableOpacity>
          //headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
        })   
    }
);  

/**
 * 

const mySbankingReact = StackNavigator(
    {
        Login: { screen: LoginForm },
        AcctSum: { screen: AccountsummaryhomePage },
    },
    { 
        initialRouteName: 'Login',
    }
);
 */

AppRegistry.registerComponent('mySbankingReact', () => mySbankingReact);  