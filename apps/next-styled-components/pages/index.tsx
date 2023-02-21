import styled, { css } from 'styled-components';

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
    <>
      <Button primary>Primary</Button>
      <Button>Second</Button>
    </>
  );
};

export default Home;
