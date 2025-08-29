import { FlexWrapper } from '../../shared/components/FlexWrapper'
import { Icon } from '../../shared/components/Icon'
import { Copyright, IconWrapper } from './Footer.styles'

export const Footer = () => {
  return (
    <FlexWrapper>
      <IconWrapper>
        <Icon iconId={'copyright'} width={'24px'} height={'24px'} viewBox={'0 0 24px 24px'} />
      </IconWrapper>
      <Copyright>2025 All Rights Reserved by Irina Lebedeva</Copyright>
    </FlexWrapper>
  )
}


