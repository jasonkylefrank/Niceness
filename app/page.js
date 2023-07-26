"use client"
import { useContext, useEffect } from "react";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

// import Layout from '../components/layout';
import WelcomeLogin from '../components/welcomeLogin';
import LogOutButton from "../components/logOutButton";
// import { firebaseProjectId } from '../lib/firebase';
import { UserAuthContext, LayoutContext } from "../lib/context";


//#region --- Styled Components ---


//#endregion

export default function RootLayout() {

  // console.log(firebaseProjectId);

  // const { rightIcon, setRightIcon, mainContent, setMainContent } = useContext(LayoutContext);
  const { userAuth, isAuthLoading } = useContext(UserAuthContext);

  // // For a cleaner UI, we're only want to show the AppBar's logo and avatar if the user is signed in.
  // //  Otherwise we show a clean first-impression UI with a single sign-in button and banner, without duplicating stuff like the logo in the AppBar.
  // useEffect(() => {
  //   if (userAuth && !(rightIcon || mainContent)) {
  //     // Undefined means use default
  //     setRightIcon(undefined); 
  //     setMainContent(undefined);
  //   }
  //   else if (!userAuth) {
  //     setRightIcon(null); 
  //     setMainContent(null);
  //   }
  // }, [userAuth, rightIcon, mainContent, setRightIcon, setMainContent]);



  let contents;

  if (isAuthLoading) {
  //   // TODO:  Consider moving either the not-logged-in case or the logged-in case to a separate route...
  //   //         I think that might alleviate needing to handle the isAuthLoading state for the not-logged-in route,
  //   //         which might speed-up and simplify that experience.
    contents = (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >          
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  } 
  else {
    if (userAuth) {
      contents = (
        <>
          <p>Welcome, {userAuth.displayName}!</p>
          <LogOutButton />
        </> 
      );
    } 
    else {
      contents = (
        <WelcomeLogin />
      );
    }
  }


  return (
    <html lang="en">
      <body>
      {contents}
      </body>
    </html>
  );
}