import styled from "styled-components";

const StyledAnswer = styled.div`
  border: 2px solid #6c757d;
  border-radius: 10px;
  background: #333333;
  padding: 5px 0;
  text-align: center;
  cursor: pointer;
  &:hover {
    background: #242424;
  }
`;
const Answer = (props) => {
  return <StyledAnswer>{props.answer}</StyledAnswer>;
};

export default Answer;
