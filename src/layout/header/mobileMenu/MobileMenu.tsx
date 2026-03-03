import { useState } from 'react'
import { Icon } from '../../../shared/components/Icon'
import { MENU_ICON } from '../../../shared/constants/menuIcon'
import { BurgerButton, Item, List, MenuLink, StyledMobileMenu } from './MobileMenu.styles'

export const MobileMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const onBurgerBtnClick = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </BurgerButton>
      
        <List
          isOpen={menuIsOpen}
          onClick={() => {
            setMenuIsOpen(false)
          }}
        >
          {MENU_ICON.map(({ id, iconId }) => (
            <Item key={iconId}>
              <MenuLink activeClass="active" to={id} smooth={true} spy={true}>
                <Icon iconId={iconId} width={'30'} height={'30'} viewBox={'0 0 18 18'} />
              </MenuLink>
            </Item>
          ))}
        </List>
      
    </StyledMobileMenu>
  )
}
