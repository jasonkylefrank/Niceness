import styled from "styled-components";
import Layout from "../components/layout";

const P = styled.p`
    color: red;
    background: yellow;    
`;

export default function Test(props) {

    return (
        <>
            <h1>This is the &quot;test&quot; page</h1>
            <P>Just a test, man!</P>
        </>
    );
}

Test.getLayout = function getLayout(page) {
    return (
        <Layout title="Test">
            {page}
        </Layout>
    );
};