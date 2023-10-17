import React from 'react';
// import { StyleSheet, View, Text } from 'react-native'; não estamos usando essa importação
import styled from 'styled-components/native';

// criando um componente de texto
const Texto = styled.Text`
  color:${props => props.cor};
  font-size: 30px;
  background-color: lightseagreen;
`;

// criando um componente View
const Pagina = styled.View`
  flex: 1;
  background-color: lightblue;
`;

// usando o componente criado
export default function App() {
  return (
    <Pagina>
      <Texto cor="red">Texto de exemplo</Texto>
      <Texto cor="black">Outro texto</Texto>
    </Pagina>
  );
}