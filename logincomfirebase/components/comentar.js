import React, {Component, useState, useEffect} from 'react'
import {View, TextInput, StyleSheet, Button, Text} from 'react-native'
import firebase from 'firebase';
import {Card} from 'react-native-elements'

export default function Comentar ({navigation}) {

  const [comentario, addComentario] = useState('');
 
  const comentar = ()=> {
      dados = {comentario: comentario};
      db = firebase.firestore();
      db.collection('comentario').add(dados).then(()=> navigation.navigate('ListarComentarios'));
   }   
  return(
      <View style={estilos.container}>
        <div>     
        <Card >
          <Card.Title>Comentar</Card.Title>     
          <TextInput style={estilos.input} placeholder="Comente aqui" value={comentario} onChangeText={addComentario} />
        </Card>

        <br/>
        <Button color="#3740FE" title='Comentar' onPress={() => {comentar()} }/>
        <br/>
        <Button color="#3740FE" title='Listar Comentários' onPress={() => navigation.navigate('ListarComentarios')} />       
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
  },
    container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  }
})
