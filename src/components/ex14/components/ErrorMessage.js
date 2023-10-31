import styled from "styled-components";

const Message = styled.span`
  color: crimson;
  font-weight: 500;
`;

export const ErrorMessage = ({ message }) => {
  return <Message>{message}</Message>;
};
