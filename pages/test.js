import styled from "styled-components";
import { Button } from "@mui/material";
import Layout from "../components/layout";
import { Container, Main } from "../components/_sharedStyles";

const P = styled.p`
    color: red;
    background: yellow;    
`;

const StyledButton = styled(Button)`
    color: red;
    border: 1px solid yellow;
    &:hover {
        /* background-color: red; */
        color: white;
    }
`;

export default function Test(props) {

    return (
        <Container>
            <Main>
                <h1>This is the &quot;test&quot; page</h1>
                <P>Just a test, man!</P>

                <StyledButton>Cool button</StyledButton>

                <Button sx={{ color: 'brown' }}>Regular button</Button>
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