import React from 'react';
import {createNativeStackNavigator} from'@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import ParkingScreen from '../screens/ParkingScreen';
import CarScreen from '../screens/CarScreen';
import ReservationScreen from '../screens/ReservationScreen';
import Logout from '../screens/Logout';
import Forgot from '../screens/ForgotPassword';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="Parking" component={ParkingScreen}/>
        <Stack.Screen name="Car" component={CarScreen}/>
        <Stack.Screen name="Reservation" component={ReservationScreen}/>
        <Stack.Screen name="Logout" component={Logout}/>
        <Stack.Screen name="Forgot" component={Forgot}/>


       


      </Stack.Navigator>
    );
  };

  export default AuthStack;
 