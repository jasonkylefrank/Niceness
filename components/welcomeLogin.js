import { signOut } from "firebase/auth";
import styled from "styled-components";
import Button from '@mui/material/Button';
import LogInButton from "./loginButton";
import { useContext, useEffect } from "react";
import { UserAuthContext } from "../lib/context";
import { auth, firestore } from "../lib/firebase";

//#region Styled Components
const WelcomeBanner = styled.h2`
  font-weight: normal;
`;

const WelcomeSubtext = styled.p`
  color: rgba(0,0,0,0.7);
  font-size: 0.9rem;
  margin-bottom: 72px;
`;

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
          : <>
              <WelcomeBanner>Welcome to the niceness challenge!</WelcomeBanner>
              <WelcomeSubtext>Log in to get started (first-time users included)</WelcomeSubtext>
              <LogInButton />
            </>
      }      
    </>
  );
}


function LogOutButton() {
  return (
    <Button onClick={() => signOut(auth)}>Log out</Button>
  );
}
