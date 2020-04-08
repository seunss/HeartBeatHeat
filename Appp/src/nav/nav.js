// ./navigation/MainTabNavigator.js

// Import React and all necessary modules
import React, { Component } from 'react';
import { Platform } from 'react-native'
import{createAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

// Import screens
import HomeScreen from '../screens/homeScreen'
import AboutScreen from '../screens/aboutScreen'
import SettingsScreen from '../screens/settingsScreen'
import UploadScreen from '../screens/uploadScreen'
import ResultScreen from '../screens/resultScreen'

// Import TabBarIcon component
import TabBarIcon from '../components/tabBar'




// Add stack for Home screen
var Home = createStackNavigator({
  Home: HomeScreen // Specify component for each screen
})

// Add stack for About screen
var About = createStackNavigator({
  About: AboutScreen // Specify component for each screen
})

// Add stack for Settings screen
var Settings = createStackNavigator({
  Settings: SettingsScreen // Specify component for each screen
})

// Add stack for Upload screen
var Upload = createStackNavigator({
  Settings: UploadScreen // Specify component for each screen
})


var Result = createStackNavigator({
    Result: ResultScreen // Specify component for each screen
})

// Create and setup navigation item for Home screen
Home.navigationOptions = {
  tabBarLabel: 'Home', // Text shown below the icon in tap bar
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-home` : 'md-home'}
    />
  )
}

// Create and setup navigation item for Settings screen
Settings.navigationOptions = {
  tabBarLabel: 'Settings', // Text shown below the icon in tap bar
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  )
}

// Create and setup navigation item for About screen
About.navigationOptions = {
  tabBarLabel: 'About', // Text shown below the icon in tap bar
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-information-circle' : 'md-information-circle'}
    />
  )
}

// Create and setup navigation item for About screen
Upload.navigationOptions = {
  tabBarLabel: 'Upload Page', // Text shown below the icon in tap bar
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-information-circle' : 'md-information-circle'}
    />
  )
}

Result.navigationOptions = {
    tabBarLabel: 'Result Page', // Text shown below the icon in tap bar
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-information-circle' : 'md-information-circle'}
        />
    )
}

Home  = createAppContainer(Home);
About  = createAppContainer(About);
Settings  = createAppContainer(Settings);
Upload = createAppContainer(Upload);
Result = createAppContainer(Result); 

// Export stacks for all app screens
export default createBottomTabNavigator({
  Home,
  About,
  Settings,
    Upload,
    Result
})