import styled from "styled-components";
import Layout from "../components/layout";


export default function Temp() {
  return (
    <>
      This is the `Temp` component!
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