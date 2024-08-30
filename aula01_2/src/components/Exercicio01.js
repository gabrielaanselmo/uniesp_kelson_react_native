import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio01 = ({nome}) => {
  return (
    <View style={sytles.container}>
      <Text sytles={sytles.text}>Olá, bem vindo: {nome}</Text>
    </View>
  )
}

const sytles = StyleSheet.create({
  container: { 
      alignItems: 'center',
      justifyContent: 'center',
      padding: 100
  },
  text: { 
      color: 'blue',
      fontSize: 20
  }
})

export default Exercicio01