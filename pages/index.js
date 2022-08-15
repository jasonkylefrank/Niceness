import { useContext, useEffect } from "react";

import Layout from '../components/layout';
import WelcomeLogin from '../components/welcomeLogin';
import LogOutButton from "../components/logOutButton";
import { firebaseProjectId } from '../lib/firebase';
import { UserAuthContext, LayoutContext } from "../lib/context";


//#region --- Styled Components ---


//#endregion

export default function Home() {

  console.log(firebaseProjectId);

  const { rightIcon, setRightIcon, mainContent, setMainContent } = useContext(LayoutContext);
  const { userAuth } = useContext(UserAuthContext);

  // For a cleaner UI, we're only want to show the AppBar's logo and avatar if the user is signed in.
  //  Otherwise we show a clean first-impression UI with a single sign-in button and banner, without duplicating stuff like the logo in the AppBar.
  useEffect(() => {
    if (userAuth && !(rightIcon || mainContent)) {
      // Undefined means use default
      setRightIcon(undefined); 
      setMainContent(undefined);
    }
    else if (!userAuth) {
      setRightIcon(null); 
      setMainContent(null);
    }
  }, [userAuth, rightIcon, mainContent, setRightIcon, setMainContent]);




  return (
    <>
      {
        userAuth 
          ?
            <>
              <p>Welcome, {userAuth.displayName}!</p>
              <LogOutButton />
            </> 
          :
            <WelcomeLogin />
      }      
    </>
  );
}


Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};