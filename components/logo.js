import styled from "styled-components";


const LogoContainer = styled.span`
  
`;

const LogoSmallText = styled.h1`
  margin: 0;
  font-size: 9px;
  font-weight: normal;
  text-transform: uppercase;
`;

const LogoMainText = styled.h1`
    margin: 0;
    font-weight: normal;
    font-size: 16px;
    line-height: 0.9;
`;



export default function Logo() {
  return (
    <LogoContainer>
      <LogoSmallText>THE</LogoSmallText>
      <LogoMainText>Niceness challenge</LogoMainText>
    </LogoContainer>
  );
}