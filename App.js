import React from 'react';
import {StyleSheet, Text} from 'react-native';
import TasksScreen from './src/screens/Tasks';

const App = ({children, title}) => {
  return <TasksScreen />;
};

const styles = StyleSheet.create({});

export default App;
