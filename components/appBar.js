import { signOut } from "firebase/auth";
import { auth  } from "../lib/firebase";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Avatar from './avatar';
import LogInButton from "./logInButton";
import LogOutButton from "./logOutButton";
import Logo from "./logo";
import { useContext, useState } from "react";
import { UserAuthContext } from "../lib/context";


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

const MenuIconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  margin-right: 20px;
  height: 48px;
  width: 48px;
`;


export default function AppBar({ showLogo, showAvatar }) {

    const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);

    const { userAuth } = useContext(UserAuthContext);
    const avatarSrc = userAuth?.photoURL;

    const handleAvatarClick = (e) => setPopoverAnchorEl(e.currentTarget);
    const handlePopoverClose = () => setPopoverAnchorEl(null);

    const isAvatarPopoverOpen = Boolean(popoverAnchorEl);

    return (
        <Header>
            <LeftSide>
              <MenuIconContainer>
                <IconButton>
                  <Icon>menu</Icon>
                </IconButton>
              </MenuIconContainer>

              { showLogo && <Logo variant="small2" />}
            </LeftSide>

            { showAvatar && <Avatar src={avatarSrc} onClick={handleAvatarClick} /> }

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
                        <LogInButton rootComponent={MenuItem} />
                }
            </Menu>
        </Header>
    );
}


