import { signOut } from "firebase/auth";
// import styled from "styled-components";
import Button from '@mui/material/Button';
import LogInButton from "./loginButton";
import { useContext, useEffect } from "react";
import { UserAuthContext } from "../lib/context";
import { auth, firestore } from "../lib/firebase";

//#region Styled Components


//#endregion


export default function WelcomeLogin() {

  const { userAuth } = useContext(UserAuthContext);

  return (
    <>
      {
        userAuth 
          ?
            <>
              <p>Welcome, {userAuth.displayName}!</p>
              <LogOutButton />
            </>          
          : <LogInButton />
      }      
    </>
  );
}


function LogOutButton() {
  return (
    <Button onClick={() => signOut(auth)}>Log out</Button>
  );
}
