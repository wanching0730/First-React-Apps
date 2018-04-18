import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, } from 'react-navigation';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults'

// routes
const App = StackNavigator({
  Home: {screen: SearchPage},
  Results: {screen: SearchResults},
});

export default App;
