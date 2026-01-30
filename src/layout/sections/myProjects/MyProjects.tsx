import { TabMenu, type tabStatusType } from './tabMenu/TabMenu'
import { Container } from '../../../shared/components/Container'
import { SectionTitle } from '../../../shared/components/SectionTitile'
import { FlexWrapper } from '../../../shared/components/FlexWrapper'
import { MyProjectsPosts } from './myProjectsPosts/MyProjectsPosts'
import { Item, Link, List, StyledMyProjects } from './MyProjects.styles'
import { PROJECTS } from '../../../shared/constants/projects'
import { useState } from 'react'
import { TABS_iTEMS } from '../../../shared/constants/tabsItems'

export const MyProjects = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState('all')

  const filteredProjects = PROJECTS.filter(project =>
    currentFilterStatus === 'all' ? true : project.type === currentFilterStatus
  )

  function changeFilterStatus(value: tabStatusType) {
    setCurrentFilterStatus(value)
  }

  return (
    <StyledMyProjects id={'projects'}>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <FlexWrapper>
          <TabMenu
            tabsItems={TABS_iTEMS}
            changeFilterStatus={changeFilterStatus}
            currentFilterStatus={currentFilterStatus}
          />
        </FlexWrapper>
        <FlexWrapper>
          <List>
            {filteredProjects.map(({ href, projectId, postImageId }) => (
              <Item key={projectId}>
                <Link href={href} target="_blank" rel="noopener noreferrer">
                  <MyProjectsPosts src={postImageId} />
                </Link>
              </Item>
            ))}
          </List>
        </FlexWrapper>
      </Container>
    </StyledMyProjects>
  )
}
