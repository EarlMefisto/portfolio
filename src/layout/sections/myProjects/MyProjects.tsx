import { TabMenu } from './tabMenu/TabMenu'
import { Container } from '../../../shared/components/Container'
import { SectionTitle } from '../../../shared/components/SectionTitile'
import { FlexWrapper } from '../../../shared/components/FlexWrapper'
import { MyProjectsPosts } from './myProjectsPosts/MyProjectsPosts'
import { Item, Link, List, StyledMyProjects } from './MyProjects.styles'
import { PROJECTS } from '../../../shared/constants/projects'

const ProjectsItems = ['All', 'Layout', 'App', 'Web']

export const MyProjects = () => {
  return (
    <StyledMyProjects>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <FlexWrapper>
          <TabMenu menuItems={ProjectsItems} />
        </FlexWrapper>
        <FlexWrapper >
          <List>
            {PROJECTS.map(({ href, projectId, postImageId }) => (
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
