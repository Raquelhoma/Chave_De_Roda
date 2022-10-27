import React, {Component, useState, useEffect} from 'react'
import {View, TextInput, StyleSheet, Button, Text} from 'react-native'
import firebase from 'firebase';
import {Card} from 'react-native-elements'

export default function AgendamentoTrocaDeOleo ({navigation}) {

  const [tipoDeServico, settipoDeServico] = useState('');
  const [tipoDeVeiculo, settipoDeVeiculo] = useState('');
  const [dataDoAgendamento, setdataDoAgendamento] = useState('');
  const [horario, sethorario] = useState('');
 
  const agendar = ()=> {
      dados = {tipoDeServico:"Troca de Óleo", tipoDeVeiculo, dataDoAgendamento, horario};
      db = firebase.firestore();
      db.collection('agendamento').add(dados).then(()=> navigation.navigate('ListarAgendamentos'));
   }

  return(
      <View>
        <div>
        <Card >
          <Card.Title>Serviço<br/> Troca de Óleo</Card.Title>    
        </Card>
          <Card >
            <Card.Title>Tipo de Veículo</Card.Title>     
            <TextInput style={estilos.input} placeholder="Tipo de Veículo" value={tipoDeVeiculo} onChangeText={settipoDeVeiculo} />
          </Card>

        <Card >
          <Card.Title>Data do Agendamento</Card.Title>     
          <TextInput type="datetime" style={estilos.input} placeholder="dd/mm/aaaa" value={dataDoAgendamento} onChangeText={setdataDoAgendamento} />
        </Card>

        <Card >
          <Card.Title>Horário</Card.Title>     
          <TextInput style={estilos.input} placeholder="Hora" value={horario} onChangeText={sethorario} />
        </Card>

        <Button color="#3740FE" title='Agendar' onPress={() => {agendar()} }/>
      </div>
      
    </View>
  )
}
const estilos = StyleSheet.create({
  input: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  }
})