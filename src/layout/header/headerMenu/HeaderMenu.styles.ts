import styled from 'styled-components'
import { thems } from '../../../styles/Thems'
import { Link } from 'react-scroll'

export const StyledHeaderMenu = styled.nav`
  @media screen and (max-width: 1190px) {
  }
`
export const List = styled.ul``

export const Item = styled.li`
  display: flex;
  gap: 10px;
  margin: 23px 0;
`

export const MenuLink = styled(Link)`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;

  width: 60px;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &.active {
    background-color: ${thems.colors.accent};
  }
`
