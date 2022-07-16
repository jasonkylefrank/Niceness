import styled from "styled-components";

const P = styled.p`
    color: red;
    background: yellow;
`;

export default function test(props) {
    return (
        <>
            <h1>This is the &quot;test&quot; page</h1>
            <P>Just a test, man!</P>
        </>
    );
}