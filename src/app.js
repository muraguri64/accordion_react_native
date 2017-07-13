/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Container, Text, Header, Title, Body, Content } from 'native-base';

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body style={{ flex: 1, alignItems: 'center' }}>
            <Title>
              Accordion List
            </Title>
          </Body>
        </Header>
        <Content padder>
          <Text>
            Accordion list goes here...
          </Text>
        </Content>
      </Container>
    );
  }
}

export default App;
