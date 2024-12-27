import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Login';
import SignUpScreen from './Signup';
import HomeScreen from './Home';
import  {Counter}  from './android/app/src/redux/features/counter/Counter';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();
function RootStack() {
  const {userData} = useSelector(state => state.auth);  
  console.log('~ file: Login.js:15 ~ Login ~ userData:', userData);

  return (
    <Stack.Navigator >
      {userData ? (
      <Stack.Group>
       <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
       <Stack.Screen name="Counter" component={Counter} />

      </Stack.Group>
      ) : (
      <Stack.Group>
       <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
       <Stack.Screen  name="Signup" component={SignUpScreen} options={{ headerShown: false }} />


      </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
