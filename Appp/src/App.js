import React from 'react';
import {Platform, StyleSheet,StatusBar, Text, View } from 'react-native';


// Import main navigation
import AppNav from './nav/AppNav'

export default function App() {
 
  return (
    <View style= {styles.container}>
     {/* If app is running on iOS, show default status bar */}
     {Platform.OS === 'ios' && <StatusBar barStyle="default" />}

     {/* Show main app tap bar */}
     
     <AppNav />
   </View>
  );

}
var s = require('./styles');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
