import Link from "next/link";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import SvgIcon from "@mui/material/SvgIcon";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Avatar from './avatar';
import LogInButton from "./logInButton";
import LogOutButton from "./logOutButton";
import Logo from "./logo";
import { useContext, useState } from "react";
import { UserAuthContext } from "../lib/context";


//#region Styled Components
const Header = styled.header`
    padding: 12px 12px 12px 0;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const LeftSide = styled.span`
  display: flex;
  align-items: center;
`;

const LeftIconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  margin-right: 20px;
  height: 48px;
  width: 48px;
`;
//#endregion


export default function AppBar({ mainContent, variant, leftIcon: leftIconProp, rightIcon: rightIconProp, rightIconMenu: rightIconMenuProp }) {

    const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);

    const { userAuth } = useContext(UserAuthContext);
    const avatarSrc = userAuth?.photoURL;

    const handleRightIconClick = (e) => setPopoverAnchorEl(e.currentTarget);
    const handlePopoverClose = () => setPopoverAnchorEl(null);

    const isAvatarPopoverOpen = Boolean(popoverAnchorEl);
    
    const createIconComponent = ({ iconProp, defaultIconName, FallbackComponent, onClick }) => {
      // Make the inner icon component
      let icon;

      if (iconProp) {
        icon = (typeof(iconProp) === 'string' ? <Icon>{iconProp}</Icon> : <SvgIcon>{iconProp}</SvgIcon>);
      }
      else if (iconProp === null) {
        icon = null;
      }
      else if (defaultIconName) {
        icon = <Icon>{defaultIconName}</Icon>;
      }
      // Make the main (or outer) component
      let component;

      if(icon) {
        const clickHandler = onClick ? { onClick } : null;
        component = <IconButton {...clickHandler}>{icon}</IconButton>
      }
      else if(icon === null) {
        component = null;
      }
      else if(FallbackComponent) {
        component = FallbackComponent;
      } 
      
      return component;
    }

    let leftIconButton = createIconComponent({ iconProp: leftIconProp, defaultIconName: "menu" });
    let rightSideComponent = createIconComponent({ 
      iconProp: rightIconProp, 
      FallbackComponent: <Avatar src={avatarSrc} onClick={handleRightIconClick} />,
      onClick: handleRightIconClick
    });


    const menu = rightIconMenuProp || (
      <Menu
          open={isAvatarPopoverOpen}
          onClose={handlePopoverClose}
          anchorEl={popoverAnchorEl}
          anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
          }}
          transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
          }}
      >
          {
              userAuth                        
                ? 
                  <LogOutButton 
                    rootComponent={MenuItem}
                    onClick={() => handlePopoverClose()}
                  >
                    Log out
                  </LogOutButton>
                : 
                  <LogInButton
                    rootComponent={MenuItem}
                    onClick={() => handlePopoverClose()}
                  />
          }
      </Menu>
    );

    return (
        <Header>
            <LeftSide>
              <LeftIconContainer>
                {leftIconButton}
              </LeftIconContainer>

              { 
                (mainContent === 'logo' )
                  ? <Link href="/"> 
                      <a>
                        <Logo variant="small2" />
                      </a>
                    </Link>
                  : mainContent
              }
            </LeftSide>

            { rightSideComponent  }

            { menu }
        </Header>
    );
}


