// ./screens/SettingsScreen.js

// Import React and necessary UI modules
import React from 'react'
import { Text, ScrollView, StyleSheet, Switch, View } from 'react-native'

// Import color constants
//import Colors from '../constants/Colors'
import { blue } from 'ansi-colors'

// Add some simple styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
  switchContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 15
  },
  switchLabel: {
    flex: 0
  }
})

// Create and export Settings screen component
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings' // Enable app header and use 'Settings' as the label
  }

  // Define default states for switch components
  state = {
    isOptionOneEnabled: false,
    isOptionTwoEnabled: false,
    isOptionThreeEnabled: false,
    isOptionFourEnabled: false
  }

  // Handle change of switch state
  handleSwitch = (option) => {
    this.setState({
      [option]: !this.state[option]
    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>
            Store heart sounds
          </Text>

          <Switch trackColor={{true: blue}} onValueChange={() => this.handleSwitch('isOptionOneEnabled')} value={this.state.isOptionOneEnabled} />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>
            okurrr
          </Text>

          <Switch trackColor={{true: blue}} onValueChange={() => this.handleSwitch('isOptionTwoEnabled')} value={this.state.isOptionTwoEnabled} />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>
            rahhhh
          </Text>

          <Switch trackColor={{true: blue}} onValueChange={() => this.handleSwitch('isOptionThreeEnabled')} value={this.state.isOptionThreeEnabled} />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>
            Reset
          </Text>

          <Switch trackColor={{true: blue}} onValueChange={() => this.handleSwitch('isOptionFourEnabled')} value={this.state.isOptionFourEnabled} />
        </View>
      </ScrollView>
    )
  }
}