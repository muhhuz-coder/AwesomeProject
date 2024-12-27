import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSignup } from './SignupContext'; // Import the useSignup hook
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Alert, KeyboardAvoidingView, Platform } from 'react-native';

export default function SignUpScreen() {
  const navigation = useNavigation();
  const { updateSignupData } = useSignup(); // Access the function to update the signup data

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function pressHandler() {
    if (password === confirmPassword) {
      if (username && email && password) {
        // Update the global signup data using the context
        updateSignupData({ username, email });

        // Navigate to Home
        navigation.popTo('Login');

        // Reset form fields
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        Alert.alert('Please fill in all fields');
      }
    } else {
      Alert.alert('Passwords do not match');
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.subtitle}>Create your account</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm Password"
          secureTextEntry
        />
      </View>

      <TouchableOpacity onPress={pressHandler} style={styles.signUpButton}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}>Login</Text>
        </TouchableOpacity>
      </View>
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
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
  },
  title: {
    fontSize: 41,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
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
    marginVertical: '4%',
  },
  signUpButton: {
    backgroundColor: '#ed4c1e',
    width: '50%',
    padding: 15,
    borderRadius: 40,
    marginTop: '4%',
    alignItems: 'center',
  },
  signUpText: {
    color: 'white',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
  },
  footerText: {
    borderWidth: 1,
    borderColor: 'white',
    paddingRight: 5,
  },
  loginLink: {
    color: '#ed4c1e',
  },
});


// import { useNavigation } from '@react-navigation/native';
// import { useState } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View, TextInput, Alert, KeyboardAvoidingView, Platform } from 'react-native';

// export default function SignUpScreen() {
//   const navigation = useNavigation();

//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   function pressHandler() {
//     if (password === confirmPassword) {
//       if (username && email && password) {
//         navigation.popTo('Home');
//         setUsername('');
//         setEmail('');
//         setPassword('');
//         setConfirmPassword('');
//       } else {
//         Alert.alert("Please fill in all fields");
//       }
//     } else {
//       Alert.alert("Passwords do not match");
//     }
//   }

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={styles.container}
//     >
//       <View style={styles.header}>
//         <Text style={styles.title}>Sign up</Text>
//         <Text style={styles.subtitle}>Create your account</Text>
//       </View>

//       <View style={styles.formContainer}>
//         <TextInput
//           style={styles.input}
//           value={username}
//           onChangeText={setUsername}
//           placeholder="Username"
//         />
//         <TextInput
//           style={styles.input}
//           value={email}
//           onChangeText={setEmail}
//           placeholder="Email"
//         />
//         <TextInput
//           style={styles.input}
//           value={password}
//           onChangeText={setPassword}
//           placeholder="Password"
//           secureTextEntry
//         />
//         <TextInput
//           style={styles.input}
//           value={confirmPassword}
//           onChangeText={setConfirmPassword}
//           placeholder="Confirm Password"
//           secureTextEntry
//         />
//       </View>

//       <TouchableOpacity onPress={pressHandler} style={styles.signUpButton}>
//         <Text style={styles.signUpText}>Sign Up</Text>
//       </TouchableOpacity>

//       <View style={styles.footer}>
//         <Text style={styles.footerText}>Already have an account?</Text>
//         <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//           <Text style={styles.loginLink}>Login</Text>
//         </TouchableOpacity>
//       </View>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   header: {
//     flex: 0.9,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: '20%',
//   },
//   title: {
//     fontSize: 41,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 13,
//     textAlign: 'center',
//   },
//   formContainer: {
//     width: '80%',
//   },
//   input: {
//     backgroundColor: '#FCEDE8',
//     padding: 10,
//     height: 60,
//     borderRadius: 10,
//     marginVertical: '4%',
//   },
//   signUpButton: {
//     backgroundColor: '#ed4c1e',
//     width: '50%',
//     padding: 15,
//     borderRadius: 40,
//     marginTop: '4%',
//     alignItems: 'center',
//   },
//   signUpText: {
//     color: 'white',
//     textAlign: 'center',
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: '20%',
//   },
//   footerText: {
//     borderWidth: 1,
//     borderColor: 'white',
//     paddingRight: 5,
//   },
//   loginLink: {
//     color: '#ed4c1e',
//   },
// });
