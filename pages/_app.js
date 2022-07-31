import { useEffect, useState } from 'react';
import { doc, getDoc, setDoc, collection, getDocs } from 'firebase/firestore';
import styled, { ThemeProvider as SCThemeProvider } from 'styled-components';
import { ThemeProvider as MUIThemeProvider, createTheme as createMUITheme, StyledEngineProvider } from '@mui/material/styles';
import GlobalStyles from "../components/_globalStyles";
import theme from '../components/_theme';
import { UserAuthContext, LayoutContext } from '../lib/context';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore} from '../lib/firebase';


const Root = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;


// Theme approach:  
//   (1) Create my own theme but use MUI's theme spec, meaning that I use 
//        their theme object structure (instead of making my own structure), and
//   (2) Pass the theme to both MUI (via their own ThemeProvider) and to the
//        Styled Components' ThemeProvider

const muiTheme = createMUITheme(theme);



function MyApp({ Component, pageProps }) {
  
  const [userAuth] = useAuthState(auth);
  const [showLogo,   setShowLogo] = useState(true);
  const [showAvatar, setShowAvatar] = useState(true);

  // Handle user log in event. Store new users in Firestore.
  useEffect(() => {
    // When login occurs
    if (userAuth) {      
      try {
        ( async () => {
          const userDocRef = doc(firestore, 'users', userAuth.uid);
          const userDocSnap = await getDoc(userDocRef);
          
          // Add a new user doc if this user doesn't have one yet
          if (!userDocSnap.exists()) {
            const { uid, displayName, email, photoURL } = userAuth;
  
            await setDoc(userDocRef, {
              uid,
              displayName,
              email,
              photoURL
            });
          }
        })();       
      } catch (error) {
        console.error(error);
      }
    }
  }, [userAuth]);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  const componentWithLayout = getLayout(<Component {...pageProps} />);

  return (
    <Root>    
      {/* Need this so we can override MUI styles.  See: https://stackoverflow.com/a/69210767/718325 */}
      <StyledEngineProvider injectFirst>
        <MUIThemeProvider theme={muiTheme}>
          <SCThemeProvider theme={muiTheme}>
            <GlobalStyles />

            <UserAuthContext.Provider value={{ userAuth }}>
              <LayoutContext.Provider value={{ showLogo, setShowLogo, showAvatar, setShowAvatar }}>
                {componentWithLayout}
              </LayoutContext.Provider>
            </UserAuthContext.Provider>
          </SCThemeProvider>
        </MUIThemeProvider>
      </StyledEngineProvider>
    </Root>
  );
}

export default MyApp
