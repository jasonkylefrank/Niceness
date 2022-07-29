import styled from "styled-components";
import Layout from "../components/layout";

const FunkyP = styled.p`
  background-color: pink;
  margin: 36px;
  padding: 8px 12px;
  border-radius: 4px;
`;

export default function Temp() {
  return (
    <>
      <p>This is the `Temp` component!</p>
      <p>This is a new paragraph!</p>
      <FunkyP>Pink paragraphs are really neat!  Indeed</FunkyP>
    </>
  );
}


Temp.getLayout = function getLayout(page) {
  return (
    <Layout title="Temp">
      {page}
    </Layout>
  );
};