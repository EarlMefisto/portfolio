import styled from 'styled-components'
import { thems } from '../../styles/Thems'

export const StyledHeader = styled.header`
  padding: 21px;
  min-height: 650px;

  position: fixed;
  top: 20px;
  right: 200px;
  z-index: 99999;

  @media ${thems.media.smallDisplay} {
    position: fixed;
    top: 0;
    right: 50px;
  }
`
