import styled from 'styled-components'
import { thems } from '../../../styles/Thems'

export const GlobalStyledMain = styled.section``

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 40px;
  background-color: ${thems.colors.secondaryBg};

  @media ${thems.media.mobile} {
    padding: 30px;
    width: auto;
    gap: 20px;
  }

  @media ${thems.media.laptop} {
    padding: 20px;
    width: auto;
    gap: 20px;
  }
`

export const StyledTitle = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: ${thems.colors.title};
  text-align: center;

  span {
    color: ${thems.colors.accent};
  }
`

export const Title = styled.h1`
  line-height: 124%;
`

export const Text = styled.p`
  max-width: 435px;
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: justify;
  hyphens: auto;

  strong {
    color: ${thems.colors.title};
  }

  @media ${thems.media.mobile} {
    font-size: 14px;
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

    @media ${thems.media.laptop} {
      top: -20px;
      left: 10px;
      bottom: 5px;
    }
  }

  @media ${thems.media.laptop} {
    margin: 20px;
  }
`

export const Photo = styled.img`
  width: 325px;
  height: 450px;
  object-fit: cover;
`

export const ButtonWrapper = styled.div`
  & button {
    font-size: 14px;
  }
`
