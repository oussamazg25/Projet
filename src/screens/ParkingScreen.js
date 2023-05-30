import React , { useState }from 'react'
import { View, Text,FlatList,TouchableOpacity, StyleSheet,Image,TextInput } from 'react-native'
import Animated, { runOnUI } from 'react-native-reanimated';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from './DrawerContent';
import ProfileScreen from './ProfileScreen';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import {
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";

const Drawer = createDrawerNavigator();

const Parking = (navigation) => {
const [parkingData, setParkingData] = useState([
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
}
const ParkingScreen = () => {


    // const isDarkMode =useColorScheme() =='dark';
   
     return (
     /*  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <Text>Home Screen</Text>
       </View>*/
       
       <Drawer.Navigator drawerContent={props => <DrawerContent { ...props}/>}>
       <Drawer.Screen name="Parking" component={Parking}/>
       
     
       
       
       </Drawer.Navigator>
   
    
   
   
   
       
         
       
    );
    
   
   }

export default ParkingScreen;
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
    backgroundColor: '#AD40AF',
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