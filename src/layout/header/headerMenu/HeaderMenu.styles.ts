import styled from 'styled-components'
import { thems } from '../../../styles/Thems'

export const StyledHeaderMenu = styled.nav``
export const List = styled.ul``

export const Item = styled.li`
  display: flex;
  gap: 10px;
  margin: 23px 0;
`

export const Link = styled.a`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;

  width: 60px;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${thems.colors.accent};
  }
`
