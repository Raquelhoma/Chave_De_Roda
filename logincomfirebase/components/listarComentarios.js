import React, {Component, useState, useEffect} from 'react'
import {View, TextInput, StyleSheet, Button, Text} from 'react-native'
import firebase from 'firebase';
import {Card} from 'react-native-elements'

export default function ListarComentarios ({navigation}) {
  
  const [comentarios, getComentarios] = useState([]);

   useEffect(()=>{
    db = firebase.firestore();
    db.collection('comentario').get().then((querySnapShot)=> {
      const list = [];
      querySnapShot.forEach((doc) => {
        list.push(doc.data())
      })
      getComentarios(list);
    });
  }, [])  

  const irParaServicos = ()=> navigation.navigate('Dashboard');

  return(
      <View style={styles.container}>
        <Card >
          <Card.Title>Comentários</Card.Title>  
          <Card.Divider/>      
          {comentarios.map((comentario, index) => {
            return <Text> {index + 1} {comentario.comentario}  </Text>
        })}        
        </Card>

        <Button color="#3740FE" title='Serviços' onPress={() => irParaServicos()}/> 
        <View style={styles.bottomView}>
          <Text style={styles.textStyle}>Carros Motos Bici Serviços Ltda <br/>Rua das Flores, 234. Aldeota<br/>Fortaleza-Ce</Text>
        </View>      
    </View>    
  )
}

const styles = StyleSheet.create({
  bottomView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0
  },
  textStyle: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 10
  },
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  }
});