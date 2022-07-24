import styled from "styled-components";
import Layout from "../components/layout";
import { Container, Main } from "../components/_sharedStyles";

const FunkyP = styled.p`
  background-color: pink;
  margin: 36px;
  padding: 8px 12px;
  border-radius: 4px;
`;

export default function Temp() {
  return (
    <Container>
        <Main>
          <p>This is the `Temp` component!</p>
          <p>This is a new paragraph!</p>
          <FunkyP>Pink paragraphs are really neat!</FunkyP>
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