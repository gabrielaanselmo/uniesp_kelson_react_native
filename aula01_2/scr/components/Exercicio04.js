import { View, Text } from 'react-native'
import React from 'react'

const Exercicio04 = () => {

    const itens = ['Bola', 'Pato', 'Rato']

    return (
        <View>
            {itens.map((item, index) => (
                <Text key={index}>{item}</Text>
            ))}
        </View>
    )
}

export default Exercicio04
