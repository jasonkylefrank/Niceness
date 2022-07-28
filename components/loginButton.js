import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth, googleAuthProvider } from "../lib/firebase";
import styled from "styled-components";
import Button from '@mui/material/Button';




export default function LogInButton({ rootComponent }) {
  const signInWithGoogle = async () => {
    try {  
      await signInWithPopup(auth, googleAuthProvider);
    } 
    catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.error(`Error trying to sign in user "${email}" using crendential: ${credential}. Error message: ${errorMessage}`);      
    }
  };

  const RootComponent = rootComponent || Button;

  return (
    // <Button onClick={signInWithGoogle}>
    <RootComponent onClick={signInWithGoogle}>
      Log in with Google
    </RootComponent>
    // </Button>
  );
}