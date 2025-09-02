import { HeaderMenu } from './headerMenu/HeaderMenu'
import { MobileMenu } from './mobileMenu/MobileMenu'
import { FlexWrapper } from '../../shared/components/FlexWrapper'
import { ThemeMode } from './themeMode/ThemeMode'
import { StyledHeader } from './Header.styles'

export const Header = () => {
  return (
    <StyledHeader>
      <FlexWrapper direction={'column'}>
        <ThemeMode />
        <HeaderMenu />
        <MobileMenu />
      </FlexWrapper>
    </StyledHeader>
  )
}
