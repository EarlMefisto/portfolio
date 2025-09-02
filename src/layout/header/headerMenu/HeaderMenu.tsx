import { Icon } from '../../../shared/components/Icon'
import { Item, Link, List, StyledHeaderMenu } from './HeaderMenu.styles'

export const HeaderMenu = () => {
  return (
    <StyledHeaderMenu>
      <List>
        <Item>
          <Link href="">
            <Icon width={'30'} height={'30'} viewBox={'0 0 18 18'} iconId={'home'} />
          </Link>
        </Item>
        <Item>
          <Link href="">
            <Icon width={'30'} height={'30'} viewBox={'0 0 18 18'} iconId={'service'} />
          </Link>
        </Item>
        <Item>
          <Link href="">
            <Icon width={'30'} height={'30'} viewBox={'0 0 18 18'} iconId={'works'} />
          </Link>
        </Item>
        <Item>
          <Link href="">
            <Icon width={'30'} height={'30'} viewBox={'0 0 18 18'} iconId={'message'} />
          </Link>
        </Item>
        <Item>
          <Link href="">
            <Icon width={'30'} height={'30'} viewBox={'0 0 18 18'} iconId={'contact'} />
          </Link>
        </Item>
        <Item>
          <Link href="">
            <Icon width={'30'} height={'30'} viewBox={'0 0 18 18'} iconId={'location'} />
          </Link>
        </Item>
      </List>
    </StyledHeaderMenu>
  )
}
