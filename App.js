/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { TextInput, View, StyleSheet,Button,Text,TouchableHighlight,FlatList} from "react-native";
import { getuserlogin } from './src/service/fetch_login';
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading :true,
      email: ""
      // password: ""
    };
  }
onClickListener = (viewId)=>{
return fetch('https://facebook.github.io/react-native/movies.json')
.then((response)=>response.json())
.then((responseJson)=>{
  this.setState({
    isLoading:false,
    dataSource:responseJson.movies,
  },function(){

  });
})
.catch((error)=>{
  console.error(error);
});
}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="E-mail"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
          />
        </View>
          <TouchableHighlight
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => this.onClickListener("login")}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableHighlight>
          {/* <Button 
          onPress={this.login_button}
          title="Login"/> */}
          <View style={styles.inputContainer}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item})=><Text>{item.title}</Text>}
            keyExtractor={({id},index)=>id}>            
          </FlatList>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC"
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});
