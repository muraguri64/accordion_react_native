/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Container } from 'native-base';
import Headertop from './components/layout/headerTop';
import Contentmain from './components/layout/contentMain';

class App extends Component {
  render() {
    return (
      <Container>
        <Headertop headerTitle='Accordion List' />
        <Contentmain />
      </Container>
    );
  }
}

export default App;
