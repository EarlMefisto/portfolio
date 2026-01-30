import { Icon } from '../../../shared/components/Icon'
import { MENU_ICON } from '../../../shared/constants/menuIcon'
import { Item, List, MenuLink, StyledHeaderMenu } from './HeaderMenu.styles'

export const HeaderMenu = () => {
  return (
    <StyledHeaderMenu>
      <List>
        {MENU_ICON.map(({ id, iconId }) => (
          <Item key={iconId}>
            <MenuLink activeClass="active" to={id} smooth={true} spy={true}>
              <Icon iconId={iconId} width={'30'} height={'30'} viewBox={'0 0 18 18'} />
            </MenuLink>
          </Item>
        ))}
      </List>
    </StyledHeaderMenu>
  )
}
