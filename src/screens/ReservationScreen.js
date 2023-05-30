import React,{useState} from 'react'
import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import Animated, { runOnUI } from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './DrawerContent';

import CustomButton from '../components/CustomButton';

const Drawer = createDrawerNavigator();

const Reservation = (navigation) => {
 
   
   
   
}

const ReservationScreen = () => {


    // const isDarkMode =useColorScheme() =='dark';
   
     return (
     /*  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <Text>Home Screen</Text>
       </View>*/
       
       <Drawer.Navigator drawerContent={props => <DrawerContent { ...props}/>}>
       <Drawer.Screen name="Reservation" component={Reservation}/>
       
     
       
       </Drawer.Navigator>
   
    
   
   
   
       
         
       
    );
    
   
   }
export default ReservationScreen
