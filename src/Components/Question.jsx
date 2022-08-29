import styled from "styled-components";

const StyledQuestion = styled.p`
  font-weight: 400;
  font-size: 20px;
`;

const Question = (props) =>{
    return <StyledQuestion>{props.question}</StyledQuestion>
}

export default Question
