
import React , { useState }from 'react'
import { View,SafeAreaView,ScrollView, Text,FlatList,TouchableOpacity, StyleSheet,Image,TextInput } from 'react-native'
import Animated, { runOnUI } from 'react-native-reanimated';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from './DrawerContent';

import CustomButton from '../components/CustomButton';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import {
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
  TouchableNativeFeedback,
} from "@ui-kitten/components";

import ParkingScreen from './ParkingScreen';
import { MaterialCommunityIcons } from "@expo/vector-icons";

//const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

/*function Reservation(){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Reservation  Screen</Text>
    </View>

  );
}*/

/*function Parking(){
  /*const [parkingData, setParkingData] = useState([
    { id: '1', name: 'Place 1', status: 'Available' },
    { id: '2', name: 'Place 2', status: 'Available' },
    { id: '3', name: 'Place 3', status: 'Available' },
    { id: '4', name: 'Place 4', status: 'Available' },
    { id: '5', name: 'Place 5', status: 'Available' },
  ]);

  const reserveParkingSpot = (id) => {
    const updatedParkingData = parkingData.map((item) => {
      if (item.id === id) {
        return { ...item, status: 'Occupied' };
      }
      return item;
    });
    setParkingData(updatedParkingData);
  };

  const releaseParkingSpot = (id) => {
    const updatedParkingData = parkingData.map((item) => {
      if (item.id === id) {
        return { ...item, status: 'Available' };
      }
      return item;
    });
    setParkingData(updatedParkingData);
  };

  const renderParkingItem = ({ item }) => (
    <View style={styles.parkingItem}>
      <Text style={styles.parkingName}>{item.name}</Text>
      {item.status === 'Available' ? (
        <TouchableOpacity
          style={styles.reserveButton}
          onPress={() => reserveParkingSpot(item.id)}
        >
          <Text style={styles.buttonText}>Réserver</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.occupiedContainer}>
          <Image
                source={require('../assets/car.png')}
              
                style={styles.carImage}
          />
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => releaseParkingSpot(item.id)}
          >
            <Text style={styles.buttonText}>Annuler</Text>
          </TouchableOpacity>
        </View>
        
       
       
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestion de parking</Text>
      <FlatList
        data={parkingData}
        renderItem={renderParkingItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );

}*/

/*function Car(){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>car  Screen</Text>
    </View>

  );
}*/




const Accueil = ({navigation}) => {
  return(
   /* <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Home Screen</Text>
    </View>*/
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
    <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25}}>
    <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          flexWrap: "wrap",
          display: "flex",
          
        }}
    >
        <CustomButton  label={"profile"} onPress={() => navigation.navigate('Profile') } src={{require:'../assets/images/misc/picsvg.svg'}} />
        <CustomButton label={"parking"} onPress={() => navigation.navigate('Parking') }/>
        <CustomButton label={"car"} onPress={() => navigation.navigate('Car') }/>
        <CustomButton label={"reservation"} onPress={() => navigation.navigate('Reservation') }/>
        
    
   
</View>
</ScrollView>
    </SafeAreaView>

  );
}


const HomeScreen = () => {


  //const isDarkMode =useColorScheme() =='dark';

  return (
  /*  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Home Screen</Text>
    </View>*/
    
    <Drawer.Navigator drawerContent={props => <DrawerContent { ...props}/>}>
    <Drawer.Screen name="Accueil" component={Accueil}/>
    
 
    
    
    </Drawer.Navigator>

 



    
      
    
 );
 

}
export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 /* title: {
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
  /*saveButton: {
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
  },*/
});

/*function Profile(){
 
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('Doe');
    const [email, setEmail] = useState('johndoe@example.com');
    const [phoneNumber, setPhoneNumber] = useState('1234567890');
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
  /*  const handleSubmit = () => {
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
   
    /*return (
     
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
        <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enregistrer</Text>
        </TouchableOpacity>
      </View>



     
    );
  }*/