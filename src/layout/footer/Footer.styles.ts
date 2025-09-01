import styled from 'styled-components'
import { thems } from '../../styles/Thems'

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
`

export const IconWrapper = styled.div`
  margin: 18px 10px 0;

  @media ${thems.media.mobile} {
    margin: 5px;
  }
`

export const Copyright = styled.p`
  margin: 0;
  padding: 18px 0;

  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 160%;
  text-transform: capitalize;

  @media ${thems.media.mobile} {
    padding: 10px 0;
    font-weight: 400;
    font-size: 13px;
    line-height: 120%;
  }
`
