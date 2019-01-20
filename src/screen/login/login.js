import React, {Component} from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';
export default class Login extends Component{
    render(){
        return(
            <ScrollView style={{padding:20}}>
                <Text style={{fontSize:27}}>Login</Text>
                <TextInput placeholder="username"></TextInput>
                <TextInput placeholder="password"></TextInput>
                <View style={{margin:7}}></View>
                <Button onPress={this.props.onLoginPress}
                title="submit"></Button>
            </ScrollView>
        );
    }
}