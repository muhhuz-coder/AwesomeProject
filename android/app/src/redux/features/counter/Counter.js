import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './CounterSlice'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export function Counter() {
  const count = useSelector((state) => state.counter.Value)
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <View >
      <Text style={styles.welcomeText}>Counter</Text>
      </View>
      <Text style={styles.welcomeText}>{count}</Text>
      <TouchableOpacity style={styles.loginButton} onPress={() => dispatch(increment())}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={() => dispatch(decrement())}>
        <Text>Decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={() => dispatch(incrementByAmount(4))}>
        <Text>Increment By 4</Text>
      </TouchableOpacity>
    </View>
  )
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
    fontSize: 41,
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

