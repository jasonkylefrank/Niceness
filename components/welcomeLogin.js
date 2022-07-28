import { signOut } from "firebase/auth";
import styled from "styled-components";
import Button from '@mui/material/Button';
import LogInButton from "./loginButton";
import { useContext, useEffect } from "react";
import { UserAuthContext } from "../lib/context";
import { auth, firestore, firebaseProjectId } from "../lib/firebase";

//#region Styled Components
const TempP = styled.p`
  margin-top: 40px;
  color: rgba(0,0,0,0.54);
  font-size: 0.85rem;
`;
const TempProjId = styled.span`
  font-weight: 500;
  color: rgba(0,0,0,0.75);
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
          : <LogInButton />
      }

      <TempP>Current Firebase project ID: <TempProjId>{firebaseProjectId}</TempProjId></TempP>
    </>
  );
}


function LogOutButton() {
  return (
    <Button onClick={() => signOut(auth)}>Log out</Button>
  );
}
