import styled from "styled-components";
import Layout from "../components/layout";
import { Container, Main } from "../components/_sharedStyles";


export default function Temp() {
  return (
    <Container>
        <Main>
          This is the `Temp` component!
        </Main>
    </Container>
  );
}

Temp.getLayout = function getLayout(page) {
  return (
    <Layout title="Temp">
      {page}
    </Layout>
  );
};