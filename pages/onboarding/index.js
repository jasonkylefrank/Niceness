import styled from "styled-components";
import Layout from "../../components/layout";
import AppBar from "../../components/appBar";


export default function Onboarding() {
  return (
    <>
      This is the `Onboarding` component!
    </>
  );
}

Onboarding.getLayout = function getLayout(page) {

  return (
    <Layout 
      title="Onboarding"
      AppBarComponent={<AppBar variant="modal" leftIcon={null} mainText="" rightIcon="more_vert" />}
    >
      {page}
    </Layout>
  );
};