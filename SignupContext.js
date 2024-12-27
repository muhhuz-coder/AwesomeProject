// SignupContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context to store signup data
const SignupContext = createContext();

// Provider component that will wrap your app and provide the context
export function SignupProvider({ children }) {
  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
  });

  const updateSignupData = (data) => {
    setSignupData(data);
  };

  return (
    <SignupContext.Provider value={{ signupData, updateSignupData }}>
      {children}
    </SignupContext.Provider>
  );
}

// Custom hook to access the context
export function useSignup() {
  return useContext(SignupContext);
}
