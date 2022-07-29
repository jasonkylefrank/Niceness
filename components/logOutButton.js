import { signOut } from "firebase/auth";
import Button from '@mui/material/Button';
import { auth } from "../lib/firebase";


export default function LogOutButton({ rootComponent, className, children, onClick }) {
  
  const RootComponent = rootComponent || Button;
  const childrenContent = children || 'Log out';

  const defaultOnClick = () => signOut(auth);
  const mergedOnClick = onClick ? () => { onClick(); defaultOnClick();} : defaultOnClick;

  return (
    <RootComponent onClick={mergedOnClick}>
      {childrenContent}
    </RootComponent>
  );
}