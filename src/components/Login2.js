import React from 'react';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import { Navigate } from 'react-router-dom';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { ref, onValue } from "firebase/database"

const firebaseUIConfig = {
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
  ],
  signInFlow: 'popup', 
  credentialHelper: 'none', 
  callbacks: { 
    signInSuccessWithAuthResult: () => {
      return false;
    }
  }
}

export function MySignInScreen(props) {
    if(props.isLoggedIn) {
        return (
            <Navigate to="/"/>
        )
    }

  const auth = getAuth(); 
  return (
    <main className="loginPage centerMain">
      <h1>We envite you to go green!</h1>
      <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
    </main>
  );
}