import React, { Component } from 'react';

import Login from './Login/Login';
import AccountsummaryhomePage from './accountsummaryhome/accountsummaryhome';

import {
  Router,
  Scene,
} from 'react-native-router-flux';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key='root' >
          <Scene key='login' component={Login} hideNavBar={true} />
          <Scene key='accountsummaryhome' component={AccountsummaryhomePage} title='AccountsummaryhomePage' />
        </Scene>
      </Router>

    );
  }

}
