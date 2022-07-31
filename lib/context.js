import { createContext } from "react";

export const UserAuthContext = createContext({ userAuth: null });



const defaultLayoutContext = { 
  showLogo: false, // Current homepage appraoch is to hide the logo and avatar until the user is signed in
  // The function value is a placeholder. The real setter will be a 
  //  state hook setter in a high-level component (probably _app)
  setShowLogo: () => {},
  showAvatar: false,
  setShowAvatar: () => {},

  appBarContent: undefined,
  // Example: setAppBarContent(<AppBar variant="modal" leftIcon="close" mainText="" rightIcon="more_vert" />)
  setAppBarContent: () => {}
};
export const LayoutContext = createContext(defaultLayoutContext);