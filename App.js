import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SplashLoad from './src/Screens/SplashLoad';
//import Home from './src/Screens/Home';
import SplashSlider from './src/Screens/SplashSlider';


const MainNavigator = createStackNavigator({
  Splash:{screen:SplashLoad},
  SplashSlider:{screen:SplashSlider},
  //Home: {screen: HomeScreen},
});

const App = createAppContainer(MainNavigator);

export default App;