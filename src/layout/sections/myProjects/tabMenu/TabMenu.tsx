import { Item, Link, List, StyledTabMenu } from "./TabMenu.styles"

export const TabMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledTabMenu>
      <List>
        {props.menuItems.map((item: string, index: number) => {
          return (
            <Item key={index}>
              <Link href="">{item}</Link>
            </Item>
          )
        })}
      </List>
    </StyledTabMenu>
  )
}

