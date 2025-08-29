import styled from 'styled-components'
import { thems } from '../../../styles/Thems'

export const GlobalStyledMain = styled.section``

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 25px;
  background-color: ${thems.colors.secondaryBg};
`

export const StyledTitle = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: ${thems.colors.title};

  span {
    color: ${thems.colors.accent};
  }
`

export const Title = styled.h1`
  line-height: 124%;

  @media ${thems.media.tablet} {
    margin: 0 0 0 20px;
  }
`

export const Text = styled.p`
  display: block;
  max-width: 435px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;

  strong {
    color: ${thems.colors.title};
  }

  @media ${thems.media.mobile} {
    max-width: 281px;

    font-size: 16px;
  }
`

export const PhotoWrapper = styled.div`
  margin: 40px;

  position: relative;
  z-index: 0;

  &::before {
    content: '';
    width: 325px;
    height: 485px;
    border: 4px solid ${thems.colors.title};

    position: absolute;
    top: -20px;
    left: 20px;
    z-index: -1;

    @media ${thems.media.tablet} {
      border: none;
    }
  }
`

export const Photo = styled.img`
  width: 325px;
  height: 450px;
  object-fit: cover;
`

export const ButtonWrapper = styled.div`
  @media ${thems.media.mobile} {
    button {
      height: 50px;
    }
  }
`
