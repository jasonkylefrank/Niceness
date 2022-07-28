import Head from 'next/head'
// import Image from 'next/image'
import styled from 'styled-components';
import Layout from '../components/layout';
import WelcomeLogin from '../components/welcomeLogin';
import About from '../components/about';
import { Container, Main } from "../components/_sharedStyles";
import { firebaseProjectId } from '../lib/firebase';


//#region --- Styled Components ---
const Separator = styled.hr`
  width: 60%;
  max-width: 480px;
  opacity: 0.25;
  margin: 72px 0;
`;


//#endregion

export default function Home() {

  console.log(firebaseProjectId);

  return (
    <Container>      
      <Main>
        <WelcomeLogin />

        <Separator />

        <About />
      </Main>
    </Container>
  );
}


Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};