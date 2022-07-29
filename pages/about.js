import styled from "styled-components";
import Layout from "../components/layout";
import AboutContent from "../components/aboutContent";


export default function About() {
  return (
    <>
      <AboutContent />
    </>
  );
}


About.getLayout = function getLayout(page) {
  return (
    <Layout title="About">
      {page}
    </Layout>
  );
};