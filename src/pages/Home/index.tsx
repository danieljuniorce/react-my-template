import React from 'react';
import { Container, Img } from '@chakra-ui/react';

import { Title } from './styled';
import logo from '../../public/logo.svg';

function Home() {
  return (
    <Container
      h="100vh"
      d="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Img src={logo} alt="logo Reactjs" w="300px" />
      <Title>Template React App with TypeScript/Chakra/StyledComponents</Title>
    </Container>
  );
}

export default Home;
