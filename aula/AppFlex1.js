import React from 'react';
// import { StyleSheet, View, Text } from 'react-native'; não estamos usando essa importação
import styled from 'styled-components/native';

// criando um componente View
const Quadrado = styled.View`
  background-color: ${props => props.cor};
  flex: ${props => props.flexivel};
  height: 50px;
`;

// criando um componente View
const Pagina = styled.View`
  flex: 1;
  flex-direction: column;
`;

// usando o componente criado
export default function App() {
  return (
    <Pagina>
      <Quadrado flexivel = {1} cor="red"></Quadrado>
      <Quadrado flexivel = {2} cor="green"></Quadrado>
      <Quadrado flexivel = {1} cor="blue"></Quadrado>
    </Pagina>
  );
}