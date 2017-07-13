//where main content will go
import React from 'react';
import { Content } from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../reducers';
import Librarylist from '../libraryList';

const Contentmain = () => (
        <Content>
          <Provider store={createStore(reducers)}>
              <Librarylist />             
          </Provider>
        </Content>
    );

export default Contentmain;
