import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 159px;
  height: 35px;
  border-radius: 2px;

  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`
