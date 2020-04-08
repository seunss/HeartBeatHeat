// ./navigation/AppNavigator.js

// Import React and 'createSwitchNavigator' module from 'react-navigation'
import React from 'react'
import { createSwitchNavigator } from 'react-navigation'
import { createAppContainer } from 'react-navigation';

// Import main navigation
import nav from './nav'

const x =createSwitchNavigator({
  Main: nav
})
s = createAppContainer(x);
// Create, and export, navigator switch
export default s; 
