"use client"
import styled from "styled-components";
import Layout from "../components/layout";
import AboutContent from "../components/aboutContent";
import AppBar from "../components/appBar";



export default function About() {
  return (
    <>
      <AboutContent />
    </>
  );
}


About.getLayout = function getLayout(page) {
  return (
    <Layout title="About"
      AppBarComponent={<AppBar mainContent="logo" />}
    >
      {page}
    </Layout>
  );
};