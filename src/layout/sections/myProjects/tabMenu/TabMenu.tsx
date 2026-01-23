import { Item, Link, List, StyledTabMenu } from './TabMenu.styles'

export type tabStatusType = 'all' | 'landing' | 'app' | 'web'

type TabMenuPropsType = {
  tabsItems: Array<{ status: tabStatusType; title: string }>
  changeFilterStatus: (value: tabStatusType) => void
  currentFilterStatus: string
}

export const TabMenu = (props: TabMenuPropsType) => {
  return (
    <StyledTabMenu>
      <List>
        {props.tabsItems.map((item: { status: tabStatusType; title: string }, index: number) => {
          return (
            <Item key={index}>
              <Link
                active={props.currentFilterStatus === item.status}
                onClick={() => {
                  props.changeFilterStatus(item.status)
                }}
              >
                {item.title}
              </Link>
            </Item>
          )
        })}
      </List>
    </StyledTabMenu>
  )
}
