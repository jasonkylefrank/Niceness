import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../components/layout';
import WelcomeLogin from '../components/welcomeLogin';
import AboutContent from '../components/aboutContent';
import { firebaseProjectId } from '../lib/firebase';


//#region --- Styled Components ---
const Separator = styled.hr`
  width: 40%;
  max-width: 440px;
  opacity: 0.25;
  margin: 72px 0;
`;

const AboutSnippet = styled.p`
  max-width: 560px;
  text-align: center;
`;
//#endregion

export default function Home() {

  console.log(firebaseProjectId);

  return (
    <>      
      <WelcomeLogin />

      <Separator />

      <AboutSnippet>
        The niceness challenge is a fun game that rewards the nicest person in the family.
        &nbsp;     
        <Link href="/about">Learn more</Link>
      </AboutSnippet>
    </>
  );
}


Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};