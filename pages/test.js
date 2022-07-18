import styled from "styled-components";
import Layout from "../components/layout";
import { Container, Main } from "../components/_sharedStyles";

const P = styled.p`
    color: red;
    background: yellow;    
`;

export default function Test(props) {

    return (
        <Container>
            <Main>
                <h1>This is the &quot;test&quot; page</h1>
                <P>Just a test, man!</P>
            </Main>
        </Container>
    );
}

Test.getLayout = function getLayout(page) {
    return (
        <Layout title="Test">
            {page}
        </Layout>
    );
};