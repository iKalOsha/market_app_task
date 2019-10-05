import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';
import {Routes} from './Routes';
import {Provider} from 'react-redux';
import store from './Store';

const App: () => React$Node = () => {
  return (
    <Provider store={store} >
    <Routes />
    </Provider>
  );
};

export default App;
