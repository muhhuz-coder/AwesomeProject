import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { logout } from './android/app/src/redux/features/AuthSlice';
import { useDispatch } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogout = () => {
    dispatch(logout()); 
    
  };

  const handleNavigateCounter = () => {
    navigation.navigate('Counter');
  };

  const handleNavigateLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home</Text>
      <Text style={styles.subtitle}>This is your home screen.</Text>

      <TouchableOpacity onPress={handleNavigateCounter} style={styles.button}>
        <Text style={styles.buttonText}>Go to Counter Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogout} style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ed4c1e',
    padding: 15,
    borderRadius: 40,
    width: '60%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
};
