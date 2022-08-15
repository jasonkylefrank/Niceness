import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth, googleAuthProvider } from "../lib/firebase";
// import styled from "styled-components";
import Button from '@mui/material/Button';




export default function LogInButton({ rootComponent, className, children, onClick }) {
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
  const childrenContent = children || 'Log in with Google';
  const defaultOnClick = signInWithGoogle;
  const mergedOnClick = onClick ? () => { onClick(); defaultOnClick(); } : defaultOnClick;


  return (
    // <Button onClick={signInWithGoogle}>
    // Note: We need to pass-in className in order for Styled Components to be able to create styled versions of this component.  See: https://styled-components.com/docs/advanced#styling-normal-react-components
    <RootComponent onClick={mergedOnClick} className={className}>
      {childrenContent}
    </RootComponent>
    // </Button>
  );
}