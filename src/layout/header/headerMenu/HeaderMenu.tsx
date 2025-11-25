import { Icon } from '../../../shared/components/Icon'
import { MENU_ICON } from '../../../shared/constants/menuIcon'
import { Item, Link, List, StyledHeaderMenu } from './HeaderMenu.styles'

export const HeaderMenu = () => {
  return (
    <StyledHeaderMenu>
      <List>
        {MENU_ICON.map(({ iconId }) => (
          <Item key={iconId}>
            <Link>
              <Icon iconId={iconId} width={'30'} height={'30'} viewBox={'0 0 18 18'} />
            </Link>
          </Item>
        ))}
      </List>
    </StyledHeaderMenu>
  )
}
