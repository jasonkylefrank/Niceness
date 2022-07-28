import Head from 'next/head';
import styled from "styled-components";
import { Container, Main } from "../components/_sharedStyles";
import AppBar from './appBar';
import { firebaseProjectId } from "../lib/firebase";


//#region Styled Components
const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.07);
`;
const TempP = styled.p`  
  color: rgba(0,0,0,0.54);
  font-size: 0.85rem;
`;
const TempProjId = styled.span`
  font-weight: 500;
  color: rgba(0,0,0,0.75);
`;
//#endregion



export default function Layout({children, title}) {
    const titleSuffix = 'Niceness!';
    const fullTitle = title ? `${title} • ${titleSuffix}` : titleSuffix;

    return (
        <>
            <Head>
                <title>{fullTitle}</title>
            </Head>
            
            <AppBar />

            <Container>
                <Main>
                    {children}
                </Main>
            </Container>

            <Footer>
                <TempP>Current Firebase project ID: <TempProjId>{firebaseProjectId}</TempProjId></TempP>
            </Footer>
        </>
    );
}


