import { createContext } from "react";

export const UserAuthContext = createContext({ userAuth: null });



const defaultLayoutContext = { 
  showLogo: true, 
  // The function value is a placeholder. The real setter will be a 
  //  state hook setter in a high-level component (probably _app)
  setShowLogo: () => {},
  showAvatar: true,
  setShowAvatar: () => {}
};
export const LayoutContext = createContext(defaultLayoutContext);