import React from 'react';
// import { StyleSheet, View, Text } from 'react-native'; não estamos usando essa importação
import styled from 'styled-components/native';

// criando um componente View
const Quadrado = styled.View`
  background-color: ${props => props.cor};
  width: 50px;
  height: 50px;
`;

// criando um componente View
const Pagina = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;

// usando o componente criado
export default function App() {
  return (
    <Pagina>
      <Quadrado cor="red"></Quadrado>
      <Quadrado cor="green"></Quadrado>
      <Quadrado cor="blue"></Quadrado>
      <Quadrado cor="yellow"></Quadrado>
    </Pagina>
  );
}