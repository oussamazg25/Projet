import React, { useContext } from "react";
import {view,Text,ActivityIndicator} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./AuthStack";
import AppStack from"./AppStack";
import { AuthContext } from "../context/AuthContext";

const  AppNav = () =>{
  const{isLoading, userToken}= useContext(AuthContext);
   if(isLoading){
    <view style={{flex:1,justifycontent:'center',alignItems:'center'}}>
      <ActivityIndicator size={2}/>
    </view>
   } 
  return (
      <NavigationContainer>
         <AuthStack/>
      </NavigationContainer>
    );
    }


export default AppNav