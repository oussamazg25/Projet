import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import { AuthProvider } from './src/context/AuthContext';
import AppNav from './src/navigation/AppNav';
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';

import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';

import { 
 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';

 function App() {

  return (
    <AuthProvider>
         <AppNav/>

    </AuthProvider>
 
  
 
 /*<NavigationContainer>
  </NavigationContainer>*/

  );
}

export default App;
