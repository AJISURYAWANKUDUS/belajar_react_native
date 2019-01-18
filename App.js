/**
* Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TextInput,View,StyleSheet} from 'react-native';


// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:""
    }
  }

  render() {
    return (
      <View style={styles.inputContainer}>
      <TextInput
      style={styles.inputs}
      placeholder="E-mail"
      keyboardType="email-address"
      underlineColorAndroid="transparent"
      onChangeText={(email)=>this.setState({email})}
      />
      <TextInput
      style={styles.inputs}
      placeholder="Password"
      secureTextEntry={true}
      underlineColorAndroid="transparent"
      onChangeText={(password)=>this.setState({password})}
      />
      </View>
      
//     <Container>
  //     <Button>
  //         <Text>Button</Text>
  //     </Button>
  // </Container>
      );
  }
}

const styles= StyleSheet.create({
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:250,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
},
inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
}
});  
