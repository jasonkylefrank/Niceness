import { signOut } from "firebase/auth";
import { auth  } from "../lib/firebase";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from './Avatar';
import LogInButton from "./LogInButton";
import { useContext, useState } from "react";
import { UserAuthContext } from "../lib/context";


const Header = styled.header`
    padding: 12px;
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
  display: inline-block;
  margin-left: 4px;
  margin-right: 20px;
`;

const H1 = styled.h1`
    margin: 0;
    font-weight: normal;
    font-size: 24px;
`;

export default function AppBar() {

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

              <H1>The Niceness Challenge</H1>
            </LeftSide>

            <Avatar src={avatarSrc} onClick={handleAvatarClick} />

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
                        ? <MenuItem onClick={() => signOut(auth)}>Log out</MenuItem>                        
                        : <LogInButton rootComponent={MenuItem} />
                }
            </Menu>
        </Header>
    );
}


