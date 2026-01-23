import styled, { css } from 'styled-components'
import { thems } from '../../../../styles/Thems'

export const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    gap: 37px;

    max-width: 606px;
    width: 100%;

    margin-bottom: 25px;
  }
`

export const List = styled.ul``
export const Item = styled.li``

export const Link = styled.a<{ active: boolean }>`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 18px;
  text-transform: capitalize;

  ${props =>
    props.active &&
    css<{ active: boolean }>`
      color: ${thems.colors.accent};
    `}
`
