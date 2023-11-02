import styled from "styled-components";

export const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  text-align: center;
  background-color: #8e8ffa;
  border-radius: 10px;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
  cursor: ${(props) => (props.$isActive ? "pointer" : "default")};
`;

export const ButtonUi = ({ active, text }) => {
  return <Button $isActive={active}>{text}</Button>;
};
