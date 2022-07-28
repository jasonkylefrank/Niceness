import styled from "styled-components";


const LogoContainer = styled.span`
  
`;

const LogoSmallText = styled.h1`
  margin: 0;
  font-size: 9px;
  text-transform: uppercase;
`;

const LogoMainText = styled.h1`
    margin: 0;
    font-weight: normal;
    font-size: 20px;
    line-height: 0.92;
`;



export default function Logo() {
  return (
    <LogoContainer>
      <LogoSmallText>THE</LogoSmallText>
      <LogoMainText>Niceness challenge</LogoMainText>
    </LogoContainer>
  );
}