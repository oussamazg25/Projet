import React,{useState} from 'react'
import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import Animated, { runOnUI } from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './DrawerContent';
import {
 
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import CustomButton from '../components/CustomButton';

const Drawer = createDrawerNavigator();

const Profile = (navigation) => {
 
 
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
  
    /*const handleSaveProfile = () => {
      // Valider et enregistrer les données du profil
      console.log('Prénom:', firstName);
      console.log('Nom:', lastName);
      console.log('Email:', email);
      console.log('Numéro de téléphone:', phoneNumber);
    };*/
    const handleSubmit = () => {
      let isValid = true;
    
      if (firstName.trim() === '') {
        setFirstNameError('Le prénom est requis.');
        isValid = false;
      } else {
        setFirstNameError('');
      }
      if (lastName.trim() === '') {
        setLastNameError('Le nom est requis.');
        isValid = false;
      } else {
        setLastNameError('');
      }
    
      // Validez les autres champs de la même manière
    
      return isValid;
    };
    /*const handleSubmit = () => {
      if (validateForm()) {
        if (!this.state.firstName.length) {
          this.setState({ firstNameError: "required" });
          error = true;
        } else {
          this.setState({ firstNameError: false });
        }*/
    
      /*  if (!this.state.lastName.length) {
          this.setState({ lastNameError: required });
          error = true;
        } else if (this.state.lastName.length < 3) {
          this.setState({ lastNameError: "Minimum 3 character required" });
        } else {
          this.setState({ lastNameError: false });
        }
      }}*/
      

   
    return (
      
   
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.username}>John Doe</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Prénom :</Text>
            <TextInput
                style={[styles.input, firstNameError && styles.inputError]}
                placeholder="Prénom"
                value={firstName}
                onChangeText={setFirstName}
                require
            />
            
            
            {firstNameError ? <Text style={styles.errorText}>{firstNameError}</Text> : null}
             
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Nom :</Text>
            <TextInput
              style={styles.input}
              value={lastName}
              onChangeText={setLastName}
            />
            {lastNameError ? <Text style={styles.errorText}>{lastNameError}</Text> : null}
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Email :</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Numéro de téléphone :</Text>
            <TextInput
              style={styles.input}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
            />
          </View>
        </View>
        
        <CustomButton label={"enregistrer"}  onPress={handleSubmit} />
      </View>


     
     
   
  /*  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Profile 1 Screen</Text>
    </View>*/
  /*  <NavigationContainer>
      <Drawer.Navigator initialRouteName="Profile">
        <Drawer.Screen name="Profile" component={ProfileScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>*/
 );
}


const ProfileScreen = () => {


  // const isDarkMode =useColorScheme() =='dark';
 
   return (
   /*  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
       <Text>Home Screen</Text>
     </View>*/
     
     <Drawer.Navigator drawerContent={props => <DrawerContent { ...props}/>}>
     <Drawer.Screen name="Profile" component={Profile}/>
     
   
     
     </Drawer.Navigator>
 
  
 
 
 
     
       
     
  );
  
 
 }
export default ProfileScreen
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
/*const styles1 = StyleSheet.create({
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
  input: {
    flex: 2,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
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
});*/