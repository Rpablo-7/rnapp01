import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styled from 'styled-components/native';

// criando um componente de texto
const Texto1 = styled.Text`
  color: #FF0000;
  font-size: 30px;
  background-color: green;
`;

// criando um componente de texto
const Texto2 = styled.Text`
  color: #FFFF00;
  font-size: 30px;
  background-color: green;
`;

// criando um componente View
const Pagina = styled.View`
  flex: 1;
  background-color: #0000FF;
`;
// usando o componente criado
export default function App() {
  return (
    <Pagina>
      <Texto1>Texto de exemplo</Texto1>
      <Texto2>Outro texto</Texto2>
    </Pagina>
  );
}