import Head from 'next/head'
// import Image from 'next/image'
import styled from 'styled-components';
import Layout from '../components/layout';
import WelcomeLogin from '../components/welcomeLogin';
import { Container, Main } from "../components/_sharedStyles";
import { firebaseProjectId } from '../lib/firebase';


//#region --- Styled Components ---



//#endregion

export default function Home() {

  console.log(firebaseProjectId);

  return (
    <Container>      
      <Main>
        <WelcomeLogin />
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