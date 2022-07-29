import styled from "styled-components";

const Container = styled.div`
  align-items: flex-start;
  max-width: 600px;
`;

const H1 = styled.h1`
  font-size: 20px;
`;

const H3 = styled.h3`
  font-size: 16px;
  margin-bottom: 4px;
  margin-top: 24px
`;

const AlphaBetaNotice = styled.p`
  color: rgba(0,0,0,0.7);
  font-weight: 500;
  font-style: italic;
  margin-top: 36px;
`;

export default function AboutContent() {
  return (
    <Container>
      <H1>About the game!</H1>
      <p>
        The Niceness Challenge is an app that gamifies how a group of people treat each other.
        It&apos;s really fun!
      </p>

      <p>
        The object of the game is to be the nicest person in your group during the game period.
        The winner collects a cool prize, plus niceness bragging rights!
      </p>
      <H3>
        How to play
      </H3>
      <p>Once your family members are signed up, anyone can start the game.</p>
      <p>During the game period (typically 1 day), you can use the app to take &quot;nicenss notes&quot;
        to capture nice things you see your other family members do. (You&apos;ll later use those 
        notes help you decide who the winner is.)
      </p>
      <p>
        Then when the game period ends, everyone votes (anonmously) for who they thought was
        the nicest person in the family.
      </p>
      <p>
        Once all members have voted, the app will reveal the winner!  
        The winner gets to choose a prize from a set of prizes that the family has loaded into 
        the app.
      </p>
      <AlphaBetaNotice>Note: The app is in alpha and some of the above-stated functionality has not yet
        been implemented.
      </AlphaBetaNotice>
    </ Container>
  );
}