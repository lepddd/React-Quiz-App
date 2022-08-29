import styled from "styled-components";

const StyledTitle = styled.div`
  font-weight: 700;
  span{
    font-size: 32px;
  }
  span:last-child{
    font-size: 20px;
  }
`;
const Title = (props) => {
    return (
        <StyledTitle>
            <span>Question {props.current}</span>
            <span>/{props.total}</span>
        </StyledTitle>
    )
};

export default Title;
