"use client"
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Layout from "../../../components/layout";
import AppBar from "../../../components/appBar";


export default function CreateFam({ params }) {
  const step = params.step

  return (
    <>
      This is the `CreateFam` component!
      <br /> <br />
      You&apos;re on the `{step}` step.
    </>
  );
}

CreateFam.getLayout = function getLayout(page) {
  return (
    <Layout
      title="Create Fam"
      AppBarComponent={<AppBar variant="modal" leftIcon="back" mainText="Create family" rightIcon={null} />}
    >
      {page}
    </Layout>
  );
};