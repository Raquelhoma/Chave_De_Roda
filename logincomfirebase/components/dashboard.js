 import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import {Card, Icon} from 'react-native-elements'
import firebase from 'firebase';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }
  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  
  encaminhar = () => {firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('AgendamentoAlinhamento')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }
  encaminharTrocaDeOleo = () => {firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('AgendamentoTrocaDeOleo')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }
  encaminharBalancemento = () => {firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('AgendamentoBalanceamento')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }
  encaminharLavagem = () => {firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('AgendamentoLavagem')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }

  
  render() {
    this.setState = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }
    return (
      <View style={styles.container}>
      <div>
        <div>
          <TouchableOpacity onPress={()=>this.encaminhar()}>
            <Card>
              <Card.Title>Serviço de Alinhamento</Card.Title>  
              <Card.Image style={{ width: 50, height: 50}} source={require('./img/carro.png')}/>
            </Card>
          </TouchableOpacity>
        
          <TouchableOpacity onPress={()=>this.encaminharTrocaDeOleo()}>
            <Card>
              <Card.Title>Troca de Oleo</Card.Title>  
              <Card.Image style={{ width: 60, height: 30}} source={require('./img/trocaOleo.png')}/>
            </Card>
          </TouchableOpacity>
        </div>
        <div>
          <TouchableOpacity onPress={()=>this.encaminharBalancemento()}>
            <Card>
              <Card.Title>Balanceamento</Card.Title>  
              <Card.Image style={{ width: 70, height: 60}} source={require('./img/balanceamento.png')}/>
            </Card>
          </TouchableOpacity>     
        
          <TouchableOpacity onPress={()=>this.encaminharLavagem()}>
            <Card>
              <Card.Title>Lavagem</Card.Title>
              <Card.Image style={{ width: 50, height: 50}} source={require('./img/lavagem.png')}/>
            </Card>
          </TouchableOpacity>
        </div>
      </div>
      <br/>
      <Button color="#3740FE"
         title='Checar Agendamentos' 
         onPress={() => this.props.navigation.navigate('ListarAgendamentos')}
         />         
        <br/>
        <Button color="#3740FE" title='Comentar' onPress={() => this.props.navigation.navigate('Comentar') }/>
        <br/>
        <Button color="#3740FE"
           title="Logout"
          onPress={() => this.signOut()}
        />
        
      </View>
    );
  }
}
const styles = StyleSheet.create({

});
