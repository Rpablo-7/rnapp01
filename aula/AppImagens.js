import React from 'react';
// import { StyleSheet, View, Text } from 'react-native'; não estamos usando essa importação
import { Image } from 'react-native';
import styled from 'styled-components/native';

const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  background-color: #DDD;
  height: 500px;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 100px;
`;

// criando um componente View
const Quadrado = styled.View`
  background-color: ${props => props.cor};
  width: 150px;
  height: 150px;
  justify-content: center;
  align-items: center;
`;

// criando um componente View
const Pagina = styled.View`
  flex: 1;
`;

// usando o componente criado
export default function App() {
  return (
    <Pagina>
      <Header>
        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="green">

          <Image source={require('./src/imagens/download.jpg')}
            style={{ width: 140, height: 140, backgroundColor: '#AAA' }}
            resizeMode='stretch'
          />

        </Quadrado>
        <Quadrado cor="blue">

          <Image source={{ uri: 'https://quatrorodas.abril.com.br/wp-content/uploads/2016/11/56e1e7d982bee10ed506bbbeqr-679-porsche-11-tif-e1493157622637.jpeg?quality=70&strip=info' }}
            style={{ width: 140, height: 140, backgroundColor: '#AAA' }}
            resizeMode='stretch'
          />

        </Quadrado>
        <Quadrado cor="yellow"></Quadrado>
      </Header>
    </Pagina>
  );
}