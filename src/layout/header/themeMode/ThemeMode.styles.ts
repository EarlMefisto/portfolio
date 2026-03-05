import styled from 'styled-components'
import { thems } from '../../../styles/Thems'

export const ChangeThemeMode = styled.div`
  margin-top: 25px;
  cursor: pointer;
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

  @media screen and (max-width: 1280px) {
    position: fixed;
    margin-top: 0;
    top: -5px;
    right: 50px;
    z-index: 99999;
    background-color: transparent;
  }
`

export const ThemeModeButton = styled.button``
