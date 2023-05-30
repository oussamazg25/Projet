import React, {useState} from 'react';
import {Alert, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import Login from "../assets/images/misc/picsvg.svg";
import CustomButton from "../components/CustomButton";

const RegistrationForm = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const register = () => {
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match.');
            return;
        }

        fetch('http://192.168.137.51:3000/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password}),
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error: ' + response.status);
                }
            })
            .then(data => {
                Alert.alert('Registration successful!', 'Welcome!');
            })
            .catch(error => Alert.alert('Error', 'An error occurred: ' + error.message));
    };

    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
            <ScrollView>

                <View style={{alignItems: 'center'}}>
                    <Login
                        height={300}
                        width={900}
                        style={{transform: [{scale: 1.5}]}}
                    />
                </View>
                <Text
                    style={{
                        fontFamily: 'Roboto',
                        fontSize: 28,
                        fontWeight: '500',
                        color: '#333',
                        marginBottom: 30,
                        textAlign: 'center',
                    }}>
                    Register
                </Text>

                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    mode="outlined"
                    style={{
                        marginLeft: 5,
                        marginRight: 5,
                        marginBottom: 5,
                    }}
                />
                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                    mode="outlined"
                    style={{
                        marginLeft: 5,
                        marginRight: 5,
                        marginBottom: 5,
                    }}
                />
                <TextInput
                    label="Confirm Password"
                    value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
                    secureTextEntry
                    mode="outlined"
                    style={{
                        marginLeft: 5,
                        marginRight: 5,
                        marginBottom: 25,
                    }}
                />
                <CustomButton label="Register" onPress={register}
                              style={{
                                  marginLeft: 5,
                                  marginRight: 5,
                                  marginBottom: 15,
                              }}/>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 30,
                    }}>
                    <Text>New to the app?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{color: '#AD40AF', fontWeight: '700'}}> Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </SafeAreaView>
    );
};

export default RegistrationForm;
