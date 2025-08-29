import styled from 'styled-components'
import { thems } from '../../styles/Thems'

type FlexWrapperPropsType = {
  direction?: string
  justify?: string
  align?: string
  wrap?: string
  gap?: string
  margin?: string
  padding?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || ''};
  flex-wrap: ${props => props.wrap || ''};
  justify-content: ${props => props.justify || ''};
  align-items: ${props => props.align || ''};
  gap: ${props => props.gap || 'none'};
  margin: ${props => props.margin || 'none'};
  padding: ${props => props.padding || 'none'};

  @media ${thems.media.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media ${thems.media.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
