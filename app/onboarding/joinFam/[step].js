import { useRouter } from "next/router";
import styled from "styled-components";
import Layout from "../../../components/layout";
import AppBar from "../../../components/appBar";
import PasteLink from "../../../components/onboarding/pasteLink";



export default function JoinFam() {
  
  const id = 5;//TEMP
  const router = useRouter();
  const { step } = router.query;

  let mainContent;
console.log()
  switch (step) {
    case 'link':
      mainContent = <PasteLink url={id}/>;
      break;
    // case 'nickname':
    //   mainContent = <Nickname />;
    default:
      break;
  }

  return (
    <>
      {/* This is the `JoinFam` component!
      <br /><br />
      You&apos;re on the `{step}` step.
      <br /><br /><br /> */}
      
      { mainContent }
    </>
  );
}

JoinFam.getLayout = function getLayout(page) {
  return (
    <Layout
      title="Join Fam"
      AppBarComponent={<AppBar variant="modal" leftIcon="back" mainText="Join family" rightIcon={null} />}
    >
      {page}
    </Layout>
  );
};