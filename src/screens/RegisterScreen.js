import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SectionList,
  Keyboard,
  StyleSheet,
  
} from 'react-native';

//import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {Picker} from '@react-native-picker/picker';
import InputField from '../components/InputField';
//import Formik from 'formik';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { isValidEmail, isValidObjField, updateError } from '../utils/methods';

import RegistrationSVG from '../assets/images/misc/registration.svg';
import GoogleSVG from '../assets/images/misc/google.svg';
import FacebookSVG from '../assets/images/misc/facebook.svg';
import TwitterSVG from '../assets/images/misc/twitter.svg';
import CustomButton from '../components/CustomButton';
//import client from '../api/client';
//import * as Yup from 'yup';
import Login from '../assets/images/misc/picsvg.svg';

/*const signupSchema = Yup.object().shape({
  fullname: Yup.string()
    .trim()
    .min(2, 'to short!')
    .max(50,'to long!')
    .required('Name is required!'),
  //email: Yup.string().email('Invalid email!').required('Email is required!'),
  /*password: Yup.string()
    .trim()
    .min(8, 'Password is too short!')
    .required('Password is required!'),
  confirmPassword: Yup.string().equals(
    [Yup.ref('password'), null],
    'Password does not match!'
  ),*/
//});




const RegisterScreen = ({ navigation }) => {
  /*const [firstName, setFirstName] = useState('dd');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');*/
    const[fdata,setFdata]=useState({
      name:'',
      email:'',
      password:'',
      cpassword:'',
    })
    const [errormsg,setErrormsg]=useState(null);
    
  
    /*const handleSaveProfile = () => {
      // Valider et enregistrer les données du profil
      console.log('Prénom:', firstName);
      console.log('Nom:', lastName);
      console.log('Email:', email);
      console.log('Numéro de téléphone:', phoneNumber);
    };*/
    const handleSubmit = () => {
      /*let isValid = true;
    
      if (firstName.trim() === '') {
        setFirstNameError('Le prénom est requis.');
        isValid = false;
      } else {
        setFirstNameError('');
      }
    
    
      return isValid;*/
      console.log(fdata);
    };
 /* return 
 
  const [inputs, setInputs] = React.useState({
      email: '',
      /*name: '',
      phone: '',
      password: ''*/
      //matricule:'',
  /*}) ;
   const validate =() =>{
    Keyboard.dismiss();
    if(!inputs.email){
      
    }
   };
   const handleOnChange =(text, input) => {
    setInputs(prevState => ({... prevState, [input]:text }));
   };
   console.log(inputs);*/
   
 /* const userInfo = {r
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [error, setError] = useState('');*/


  /*const isValidForm = () => {
    // we will accept only if all of the fields have value
    if (!isValidObjField(userInfo))
      return updateError('Required all fields!', setError);
    // if valid name with 3 or more characters
    if (!fullname.trim() || fullname.length < 3)
      return updateError('Invalid name!', setError);
    // only valid email id is allowed
    if (!isValidEmail(email)) return updateError('Invalid email!', setError);
    // password must have 8 or more characters
    if (!password.trim() || password.length < 8)
      return updateError('Password is less then 8 characters!', setError);
    // password and confirm password must be the same
    if (password !== confirmPassword)
      return updateError('Password does not match!', setError);

    return true;
  };*/


  return (
   /* <Formik 
    initialeValues={{
      fullname:'',
      email:'',
      
    }}
    validationSchema={signupSchema}
    >
      {({values,errors,touched,handleChange, setFieldTouched,isValid, handleSubmit})=>(*/
         
      
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
            <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25}}>
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
            fontSize: 30,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
           
          }}>
          Register
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
    <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <GoogleSVG height={24} width={24} />

          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <FacebookSVG height={24} width={24} />

          </TouchableOpacity>
          
        </View>
        <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
          Or, register with email ...
        </Text>

        <InputField
          label={'Full Name'}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />

           
          }
         // value={firstName}
         // onChangeText={setFirstName}
         // require
        /*  value={values.fullname}
          onChangeText={handleChange('fullname')}*/
        />
        
       
    <InputField
          label={'Email'}
          icon={
            <MaterialIcons
              name="mail"
              size={20}
              color="#666"
              style={{marginRight: 5}}
    
            />
           
          }
         // value={values.email}
         keyboardType="email-address"
         
          
        />
       
           <InputField
          label={'num phone'}
          icon={
            <MaterialIcons
              name="phone"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          keyboardType="numeric"
        />
        <InputField
          label={'matricule car'}
          icon={
            <Ionicons
            name="car"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          //keyboardType="automobile"
        />
       
        <Picker 
      style={{height:50,width:250}}
       >  
        <Picker.Item label="Please select categorie" value="" />
          <Picker.Item label="mini-citadines" value="mini-citadines"/>
          <Picker.Item label="petites voitures" value="petites voitures"/>
          <Picker.Item  label="voitures compactes" value="voitures compactes"/>
          <Picker.Item  label="grandes voitures familiales" value="grandes voitures familiales"/>
          <Picker.Item  label="voitures de sport" value="voitures de sport"/>
          
        
        </Picker>

        <InputField/>


        <InputField
          label={'Password'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
          
        />

        <InputField
          label={'Confirm Password'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
        />
 <CustomButton label={'Register'} onPress={{handleSubmit}} />
 

<View
  style={{
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  }}>
  <Text>Already registered?</Text>
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <Text style={{color: '#AD40AF', fontWeight: '700'}}> Login</Text>
  </TouchableOpacity>
</View>
     
        </ScrollView>
    </SafeAreaView>
   /* )}
    </Formik>*/

);
};



export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
