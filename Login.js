import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView, Platform, ToastAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './android/app/src/redux/features/AuthSlice';



export default function LoginScreen() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  //hooks
  const dispatch = useDispatch();
  const {userData,isError} = useSelector(state => state.auth); 

  const pressHandler = () => {
    let trimmeduser = username.trim();
    let trimmedpass = password.trim();
    const params = {
      username: trimmeduser,
      password : trimmedpass,
    };
    dispatch(login(params));
  };


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome Back</Text>
        <Text style={styles.subText}>Enter your credentials for login</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry
        />
      </View>

      <TouchableOpacity onPress={pressHandler} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login Now</Text>
      </TouchableOpacity>

      <Text style={styles.forgotPassword}>Forgot Password?</Text>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.popTo('Signup')}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.signupContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Counter')}>
          <Text style={styles.signupLink}>Counter</Text>
        </TouchableOpacity>
      </View> */}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
  },
  welcomeText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 13,
    textAlign: 'center',
  },
  formContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: '#FCEDE8',
    padding: 10,
    height: 60,
    borderRadius: 10,
    marginVertical: '2%',
  },
  loginButton: {
    backgroundColor: '#ed4c1e',
    width: '80%',
    padding: 20,
    borderRadius: 10,
    marginTop: '5%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  forgotPassword: {
    color: '#ed4c1e',
    marginTop: '5%',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  signupText: {
    borderWidth: 1,
    borderColor: 'white',
    marginRight: 5,
  },
  signupLink: {
    color: '#ed4c1e',
  },
});
