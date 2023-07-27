import Button from '@mui/material/Button';
import { auth } from "../../lib/firebase";


export default function LogOutButton({ rootComponent, className, children, onClick }) {
  
  const RootComponent = rootComponent || Button;
  const childrenContent = children || 'Log out';

  const defaultOnClick = () => signOut(auth);
  const mergedOnClick = onClick ? () => { onClick(); defaultOnClick();} : defaultOnClick;

  return (
    // Note: We need to pass-in className in order for Styled Components to be able to create styled versions of this component.  See: https://styled-components.com/docs/advanced#styling-normal-react-components
    <RootComponent onClick={mergedOnClick} className={className}>
      {childrenContent}
    </RootComponent>
  );
}