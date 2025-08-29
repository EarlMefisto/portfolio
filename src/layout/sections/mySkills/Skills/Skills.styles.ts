import styled from 'styled-components'
import { thems } from '../../../../styles/Thems'

export const StyledSkills = styled.div`
  width: 310px;
  min-height: 225px;

  background-color: ${thems.colors.secondaryBg};

  @media ${thems.media.laptop} {
    flex-shrink: 1;
    flex-grow: 1;
  }

  @media ${thems.media.mobile} {
    width: 297px;
  }
`

export const IconWrapper = styled.div`
  margin-top: 28px;
`

export const Titile = styled.h3`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 124%;
  text-transform: capitalize;
  color: ${thems.colors.text};

  margin: 26px 0 15px;
`
