import Link from 'next/link';
import styled from "styled-components";
import Button from '@mui/material/Button';

import Logo from './logo';
import NextInlineLink from "./nextInlineLink";
import LogInButton from "./logInButton";
import GoogleLogo from "./googleLogo";

//#region Styled Components
const WelcomeBanner = styled.h2`
  font-weight: normal;
  text-align: center;
  transition: 0.3s;
  
  font-size: 32px;

  @media (min-width: 690px) {
    font-size: 40px;
  }

  @media (min-width: 920px) {
    font-size: 48px;
  }
`;

WelcomeBanner.Name = styled.span`
  font-weight: bold;
`;



const AboutSnippet = styled.p`
  font-size: 1.2rem;
  max-width: 560px;
  text-align: center;
  margin: 32px 0 12px 0;
  `;

const LearnMoreLink = styled(NextInlineLink)`
  font-size: 1rem;
  /* margin-top: 48px; */
`;

const Separator = styled.hr`
  width: 30%;
  max-width: 440px;
  opacity: 0.25;
  margin: 60px 0 60px 0;
`;

const StyledLogInButton = styled(LogInButton)`
  font-size: 1.16rem;  
  margin-top: 56px;
`;

const StyledHowToPlayButton = styled(Button)`
  color: rgba(0,0,0,0.7);
`;

const StyledGoogleLogo = styled(GoogleLogo)`
  height: 16px;
  margin-right: 12px;
`;

// const LogInPrompt = styled.p`
//   color: rgba(0,0,0,0.7);
//   font-size: 1.35rem;
//   text-align: center;
//   margin-bottom: 8px;
// `;
  
// const LogInSubtext = styled.span`
//   font-size: 0.9rem;
//   color: rgba(0,0,0,0.4);
//   text-align: center;
//   margin-top: 24px;
// `;
//#endregion


export default function WelcomeLogin() {

  return (
    <>
      <Logo />
      {/* <Logo maxWidth="none" /> */}

      <AboutSnippet>                
        Be the nicest... win the prize!
      </AboutSnippet>
      
      <StyledLogInButton>
        <StyledGoogleLogo /> Log in to start!
      </StyledLogInButton>
      {/* <LogInSubtext>(First-time or returning users)</LogInSubtext> */}
      
      <Separator />

      {/* <LearnMoreLink href="/about">How to play</LearnMoreLink> */}

      <StyledHowToPlayButton>
        <Link href="/about">
          How to play
        </Link>
      </StyledHowToPlayButton>
    </>
  );
}
