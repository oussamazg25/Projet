import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React,{useContext, useState} from "react";

import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginSVG from '../assets/images/misc/login.svg';
import { AuthContext } from "../context/AuthContext";
import { isValidEmail, isValidObjField, updateError } from '../utils/methods';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../assets/images/misc/picsvg.svg';
import { Formik } from 'formik';

import client from '../api/client'

const LoginScreen = ({navigation}) => {
  
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const { email, password } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError('Required all fields!', setError);

    if (!isValidEmail(email)) return updateError('Invalid email!', setError);

    if (!password.trim() || password.length < 3)
      return updateError('Password is too short!', setError);

    return true;
  };

  const submitForm = async () => {
    if (isValidForm()) {
      
      try {
        const res = await client.post('/sign-in', { ... userInfo });
     
        console.log('running');

       console.log(res.data);
     } catch (error) {
        console.log(error.message);
      }
    }
  };

          
    


   return (

    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
         <ScrollView>
      
         <View style={{alignItems: 'center'}}>
        <Login
            height={300}
            width={900}
            
           // style={{transform: [{rotate: '1deg'}]}
           style={{transform:[{scale:1.5}]}}
          
          />
        </View>
     
          <Text
        style={{
          fontFamily: 'Roboto-Medium',
          fontSize: 28,
          fontWeight: '500',
          color: '#333',
          marginBottom: 30,
        }}>
        Login
      </Text>
      

      <InputField
        label='Email ID'
       value={email}
      // onChangeText={il)}
      onChangeText={value => handleOnChangeText(value, 'email')}
        icon={
          <MaterialIcons
          name="alternate-email"
          size={20}
          color="#666"
          style={{marginRight: 5}}
        />
        }
        keyboardType="email-address"
       
      />


       

<InputField
        label='password'
        value={password}
        onChangeText={value => handleOnChangeText(value, 'password')}
       
     
        icon={
          <Ionicons
          name="ios-lock-closed-outline"
          size={20}
          color="#666"
          style={{marginRight: 5}}
        />
        }
        inputType="password"
        
        fieldButtonLabel={"Forgot?"}
        fieldButtonFunction={() => {navigation.navigate('Forgot')}}
      />
       
       <CustomButton label={"Login"} onPress={submitForm} />
     
       <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 30,
        }}>
        <Text>New to the app?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{color: '#AD40AF', fontWeight: '700'}}> Register</Text>
        </TouchableOpacity>
      </View>
      
      </ScrollView>
      
    </SafeAreaView>
    
   
    
  );
  
};


export default LoginScreen;

const styles = StyleSheet.create({
  message: {
    fontSize: 16,
    marginVertical: '5%',
},
});
