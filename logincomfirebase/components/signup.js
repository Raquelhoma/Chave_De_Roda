import React, { Component, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from 'firebase';

export default class Signup extends Component {

  constructor() {
    super();
    this.state = { 
      displayName: '',
      email: '', 
      password: '',
      isLoading: false
    }
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
 

  registerUser = ()=>{
    if(this.state.email==="" && this.state.password===""){
      Alert.alert('Insira detalhes para se inscrever!');
    }else{
      this.setState({
        isLoading: true
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res)=>{
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        

        console.log("Usuario registrado com sucesso!")
        Alert.alert("Usuario registrado com sucesso!")
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Login')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }
    return(
      <View style={styles.container}>  
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />      
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   
        <Button
          color="#3740FE"
          title="Cadastrar"
          onPress={() => this.registerUser()}
        />
        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Login')}>
          J?? est?? registrado? 
          Clique aqui para fazer Login
        </Text> 
        <View style={styles.bottomView}>
          <Text style={styles.textStyle}>Carros Motos Bici Servi??os Ltda <br/>Rua das Flores, 234. Aldeota<br/>Fortaleza-Ce</Text>
        </View>                         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center',
    fontSize: 15
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  bottomView: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  textStyle: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 10
  }
});

