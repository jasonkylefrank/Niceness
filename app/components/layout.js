"use client"
import Head from 'next/head';
import { useContext } from "react";
import Icon from "@mui/material/Icon";
import styled from "styled-components";
import { Container, Main } from "./sharedStyles";
import AppBar from './appBar';
import { firebaseProjectId } from "../../lib/firebase";
import { LayoutContext } from "../../lib/context";


//#region Styled Components
const DevFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.04);
    border-top: 1px solid rgba(0,0,0,0.1);
`;

const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.07);
    height: 48px;
    `;
    // color: ${({ theme }) => theme.palette.text.secondary };
const TempP = styled.p`  
  color: rgba(0,0,0,0.54);
  font-size: 0.85rem;
`;
const TempProjId = styled.span`
  font-weight: 500;
  color: rgba(0,0,0,0.75);
`;

const FooterIcon = styled(Icon)`
    /* Adding extra specificity (via the '&&') to override the 'material icons' styles that are overriding my styles in the production build */
    && {        
        font-size: 14px;
        margin: 2px 4px 0 4px;
        width:42px;
    }
`;
//#endregion



export default function Layout({ children, title, AppBarComponent }) {
    const titleSuffix = 'Niceness!';
    const fullTitle = title ? `${title} • ${titleSuffix}` : titleSuffix;

    const { rightIcon, mainContent } = useContext(LayoutContext);

    const appBar = AppBarComponent || <AppBar mainContent={mainContent} rightIcon={rightIcon} />;

    return (
        <>
            <Head>
                <title>{fullTitle}</title>
            </Head>
            
            { appBar }

            <Container>
                <Main>
                    {children}
                </Main>
            </Container>

            <Footer>
                Created with <FooterIcon>favorite</FooterIcon> by Code For Klondike
            </Footer>

            {
                process.env.NODE_ENV !== 'production'
                &&
                <DevFooter>
                    <TempP>Current Firebase project ID: <TempProjId>{firebaseProjectId}</TempProjId></TempP>
                </DevFooter>
            }
        </>
    );
}


