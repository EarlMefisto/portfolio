import { HeaderMenu } from './headerMenu/HeaderMenu'
import { ThemeMode } from './themeMode/ThemeMode'
import { StyledHeader } from './Header.styles'
import { MobileMenu } from './mobileMenu/MobileMenu'

export const Header = () => {
  return (
    <StyledHeader>
      <ThemeMode />
      <HeaderMenu />
      <MobileMenu />
    </StyledHeader>
  )
}
