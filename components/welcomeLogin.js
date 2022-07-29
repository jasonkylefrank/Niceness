import { signOut } from "firebase/auth";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import Button from '@mui/material/Button';

import LogInButton from "./logInButton";
import GoogleLogo from "./googleLogo";
import { UserAuthContext } from "../lib/context";
import { auth, firestore } from "../lib/firebase";

//#region Styled Components
const WelcomeBanner = styled.h2`
  font-weight: normal;
  text-align: center;
  transition: 0.3s;
  
  font-size: 32px;

  @media (min-width: 690px) {
    font-size: 40px;
  }

  @media (min-width: 920px) {
    font-size: 48px;
  }
`;

WelcomeBanner.Name = styled.span`
  font-weight: bold;
`;

const WelcomeSubtext = styled.p`
  color: rgba(0,0,0,0.7);
  font-size: 1.35rem;
  margin-bottom: 8px;
`;

const LogInSubtext = styled.span`
  font-size: 0.9rem;
  color: rgba(0,0,0,0.4);
`;

const StyledLogInButton = styled(LogInButton)`
  font-size: 1.16rem;  
  margin-top: 48px;
`;

const StyledGoogleLogo = styled(GoogleLogo)`
  height: 16px;
  margin-right: 12px;
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
              <WelcomeBanner>Welcome to the <WelcomeBanner.Name>niceness challenge</WelcomeBanner.Name>!</WelcomeBanner>
              
              <WelcomeSubtext>Log in to get started!</WelcomeSubtext>
              <LogInSubtext>(First-time or returning users)</LogInSubtext>
              
              <StyledLogInButton>
                <StyledGoogleLogo /> Log in with Google
              </StyledLogInButton>
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
