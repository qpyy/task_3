import styled from "styled-components";

const StyledTodo = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 300px;
  height: 50px;
`;

const StyledParagraph = styled.p`
  font-size: 24px;
  cursor: pointer;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  padding-right: 20px;
  flex: 1;
`;

const StyledIcon = styled.img`
  cursor: pointer;
  width: 16px;
`;

export { StyledParagraph, StyledIcon, StyledTodo };
