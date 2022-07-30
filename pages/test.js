import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import Layout from "../components/layout";


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
        <>
            <h1>This is the &quot;test&quot; page</h1>
            <P>Just a test, man!</P>

            <StyledButton>Cool button</StyledButton>

            <Button sx={{ color: 'brown' }}>Regular button</Button>

            <IconButton>
                <Icon>rowing</Icon>
            </IconButton>
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