import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar
  } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class LoginForm extends Component {
    state = {
        userName: '',
        password: '',
      };
    render() {
        return (
            <KeyboardAvoidingView behavior='padding'>
                <View style={styles.container}>
                    <TextInput 
                        placeholder='Username'
                        placeholderTextColor='darkgray'
                        returnKeyType='next'
                        ref={(input) => this.userNameInput = input }
                        onChangeText={(text) => {
                            this.setState({
                                userName: text,
                            });
                        }}                        
                        onSubmitEditing={() => this.passwordInput.focus() }
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={styles.input}>
                    </TextInput>
                    <TextInput 
                        placeholder='Password'
                        placeholderTextColor='darkgray'
                        secureTextEntry
                        returnKeyType='go'
                        ref={(input) => this.passwordInput = input }
                        onChangeText={(text) => {
                            this.setState({
                                password: text,
                            });
                        }}                         
                        autoCapitalize='none'
                        autoCorrect={false}                        
                        style={styles.input}>
                    </TextInput>                
                </View>

                <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={() => {
                        // navigate to next page with name.
                        //alert(this.state.name);
                        console.log('888999 10001 g the name is ' + this.state.userName);
                        console.log('888999 10002 g the password is ' + this.state.password);

                        if (this.state.userName.trim().length == 0 || 
                            this.state.password.trim().length == 0) {
                            alert('Please input Username and Password!');
                        }
                        else {
                            this.props.navigate('AcctSum', { userName: this.state.userName,
                            password: this.state.password, });
                        }
                    }}                    
                >
                    <Text style={styles.buttonText}>
                        Sign In
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        ) 
        
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 30,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 20
    },

    input: {
        height: 36,
        width: 260,
        paddingLeft: 10,
        backgroundColor: 'rgba(255,255,255, 0.7)',
        marginBottom: 10,
        borderColor: 'lightgray', 
        borderWidth: 0,
        borderRadius: 5,
    },

    buttonContainer: {
        backgroundColor: '#2980b9',
        borderRadius: 6,
        marginTop: 20,
        paddingVertical: 7,
    },

    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '700',
    }
  });