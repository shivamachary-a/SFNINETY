import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import NavBar from './components/navbar';
import Home from './Home';

function App() {

  return (
    <ChakraProvider theme={theme}>

      <NavBar></NavBar>
      <Home></Home>

    </ChakraProvider >
  );

}

export default App;
