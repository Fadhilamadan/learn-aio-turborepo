import styled, { css } from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 2px;
  padding: 0.25em 1em;

  ${(props: { primary?: boolean }) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

const Home = () => {
  return (
    <Wrapper>
      <Title>Hello World!</Title>

      <Button primary>Primary</Button>
      <Button>Second</Button>
    </Wrapper>
  );
};

export default Home;
