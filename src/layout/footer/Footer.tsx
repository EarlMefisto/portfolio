import { Icon } from '../../shared/components/Icon'
import { Copyright, IconWrapper, StyledFooter } from './Footer.styles'

export const Footer = () => {
  return (
    <StyledFooter>
      <IconWrapper>
        <Icon iconId={'copyright'} width={'24'} height={'24'} viewBox={'0 0 24 24'} />
      </IconWrapper>
      <Copyright>2026 All Rights Reserved by Irina Lebedeva</Copyright>
    </StyledFooter>
  )
}
