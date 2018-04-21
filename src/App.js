import React from 'react';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';
import reducers from './reducers';

const App = () => (
  <Provider store={createStore(reducers)}>
    <View style={{ flex: 1 }}>
      <Header headerText="Tech Stack" />
      <LibraryList />
    </View>
  </Provider>
);
export default App;
