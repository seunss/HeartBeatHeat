// ./screens/HomeScreen.js

// Import React, necessary UI modules from React native
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import { json } from './uploadScreen'




// Add some simple styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0, 0, 0, .4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center'
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: 'red'
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50
  },
  welcomeText: {
    fontSize: 21,
    fontWeight: '700'
  }
})

// Create and export Home screen component
export default class ResultScreen extends React.Component {
  static navigationOptions = {
    title: 'Result is displayed on this screen' // disable app header
  }

  // Show notification about mode


    render() {
       
      return (
       <View>
       
          </View>

    )
  }
}