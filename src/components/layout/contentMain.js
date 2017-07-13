//where main content will go
import React from 'react';
import { Content, Text } from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../reducers';

const Contentmain = () => (
        <Content padder>
          <Provider store={createStore(reducers)}>
            <Text>Accordion list goes here...</Text> 
          </Provider>
        </Content>
    );

export default Contentmain;
