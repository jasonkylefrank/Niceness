import styled from "styled-components";
import Layout from "../components/layout";
import { Container, Main } from "../components/_sharedStyles";


export default function Temp() {
  return (
    <Container>
        <Main>
          <p>This is the `Temp` component!</p>
          <p>This is a new paragraph!</p>
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