import React,{useState} from 'react'
import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import Animated, { runOnUI } from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './DrawerContent';

import CustomButton from '../components/CustomButton';

const Drawer = createDrawerNavigator();

const Car = (navigation) => {
 return(
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.username}>John Doe</Text>
        </View>
        
        
        <CustomButton label={"enregistrer"} />
      </View>
 );
   
   
}

const CarScreen = () => {


    // const isDarkMode =useColorScheme() =='dark';
   
     return (
     /*  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <Text>Home Screen</Text>
       </View>*/
       
       <Drawer.Navigator drawerContent={props => <DrawerContent { ...props}/>}>
       <Drawer.Screen name="Profile" component={Car}/>
       
     
       
       </Drawer.Navigator>
   
    
   
   
   
       
         
       
    );
    
   
   }
export default CarScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 40,
      marginBottom:20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    parkingItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    parkingName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    reserveButton: {
      backgroundColor: 'blue',
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 4,
    },
    occupiedContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    carImage: {
      width: 24,
      height: 24,
      marginRight: 8,
    },
    cancelButton: {
      backgroundColor: 'red',
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 4,
    },
    buttonText: {
      color: 'white',
      fontSize: 14,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      //marginBottom: 10,
      paddingHorizontal: 10,
    },
    inputError: {
      borderColor: 'red',
    },
    errorText: {
      color: 'red',
      fontSize: 12,
     
    },
    container: {
      flex: 1,
      padding: 16,
      justifyContent: 'center',
    },
    header: {
      alignItems: 'center',
      marginBottom: 20,
    },
    username: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    infoContainer: {
      marginBottom: 20,
    },
    infoItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    label: {
      fontWeight: 'bold',
      marginRight: 10,
      flex: 1,
    },
    /*input: {
      flex: 2,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
    },*/
    saveButton: {
      backgroundColor: 'blue',
      paddingVertical: 12,
      borderRadius: 4,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    input: {
      width: "80%",
      alignItems: "flex-end",
      borderWidth: 0.1,
      borderColor: '#0246A7',
      padding: 10,
      marginTop: 20,
      borderRadius: 10,
      flexDirection: "row",
      backgroundColor: "#fff",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3
      // backgroundColor:"#e8e8e8"
    },
  });