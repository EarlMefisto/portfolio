import styled, { css } from 'styled-components'
import { thems } from '../../../styles/Thems'
import { Link } from 'react-scroll'

export const StyledMobileMenu = styled.nav`
  @media screen and (min-width: 1280px) {
    display: none;
  }
`
export const List = styled.ul<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999999;

  background-color: ${thems.colors.secondaryBg};
  display: none;
  flex-direction: column;
  align-items: center;

  ${props =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`

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
export const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 99999999;
  background-color: transparent;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${thems.colors.title};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${thems.colors.title};
      position: absolute;
      transform: translateY(-10px);

      ${props =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `}
    }

    &::after {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${thems.colors.title};
      position: absolute;
      transform: translateY(10px);

      ${props =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          width: 36px;
          transform: rotate(45deg) translateY(0);
        `}
    }
  }
`
