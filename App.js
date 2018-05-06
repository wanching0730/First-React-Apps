import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, } from 'react-navigation';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';
import PropertyView from './PropertyView';

// routes
const App = StackNavigator({
  Home: {screen: SearchPage},
  Results: {screen: SearchResults},
  Property: {screen: PropertyView}
});

export default App;
