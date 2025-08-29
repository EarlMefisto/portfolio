import styled, { css } from 'styled-components'
import { thems } from '../../../styles/Thems'

export const StyledMobileMenu = styled.nav`
  display: none;

  @media ${thems.media.laptop} {
    display: block;
  }
`

export const Item = styled.li``
export const Link = styled.a``
export const List = styled.ul``

export const PopUp = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
  background-color: rgba(21, 31, 52, 0.987);
  display: none;

  ${props =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    gap: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 9999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: rgba(255, 179, 0, 0.959);

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
      background-color: rgba(255, 179, 0, 0.959);

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
      background-color: rgba(255, 179, 0, 0.959);

      position: absolute;
      transform: translateY(10px);

      ${props =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 36px;
        `}
    }
  }
`
