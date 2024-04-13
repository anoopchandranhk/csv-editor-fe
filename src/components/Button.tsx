/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { ReactNode } from 'react';

const ButtonStyled = styled.button`
  padding: 10px 20px;
  background-color: #0070f3;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}
const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};

export default Button;
