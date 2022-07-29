import Link from 'next/link';
import { useContext, useEffect } from "react";
import styled from 'styled-components';
import Layout from '../components/layout';
import WelcomeLogin from '../components/welcomeLogin';
import { firebaseProjectId } from '../lib/firebase';
import { UserAuthContext, LayoutContext } from "../lib/context";


//#region --- Styled Components ---
const Separator = styled.hr`
  width: 30%;
  max-width: 440px;
  opacity: 0.25;
  margin: 72px 0;
`;

const AboutSnippet = styled.p`
  max-width: 560px;
  text-align: center;
`;
//#endregion

export default function Home() {

  console.log(firebaseProjectId);

  const { showAvatar, setShowAvatar, showLogo, setShowLogo } = useContext(LayoutContext);
  const { userAuth } = useContext(UserAuthContext);

  // For a cleaner UI, we're only want to show the AppBar's logo and avatar if the user is signed in.
  //  Otherwise we show a clean first-impression UI with a single sign-in button and banner, without duplicating stuff like the logo in the AppBar.
  useEffect(() => {
    if (userAuth && !(showAvatar || showLogo)) {
      setShowAvatar(true); 
      setShowLogo(true);
    }
    else if (!userAuth) {
      setShowAvatar(false); 
      setShowLogo(false);
    }
  }, [userAuth]);




  return (
    <>      
      <WelcomeLogin />

      <Separator />

      <AboutSnippet>
        The niceness challenge is a fun game that rewards the nicest person in the family.
        &nbsp;     
        <Link href="/about">Learn more</Link>
      </AboutSnippet>
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