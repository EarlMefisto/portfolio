import { TabMenu } from './tabMenu/TabMenu'
import postImage1 from '../../../assets/img/0cbd17e4381497547009ce81acc4eee3.webp'
import postImage2 from '../../../assets/img/Alcohol_use-main.webp'
import postImage3 from '../../../assets/img/photo_2024-11-27_16-55-32.webp'
import { Container } from '../../../shared/components/Container'
import { SectionTitle } from '../../../shared/components/SectionTitile'
import { FlexWrapper } from '../../../shared/components/FlexWrapper'
import { MyProjectsPosts } from './myProjectsPosts/MyProjectsPosts'
import { Item, Link, List, StyledMyProjects } from './MyProjects.styles'

const ProjectsItems = ['All', 'Layout', 'App']

export const MyProjects = () => {
  return (
    <StyledMyProjects>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <FlexWrapper>
          <TabMenu menuItems={ProjectsItems} />
        </FlexWrapper>
        <FlexWrapper wrap={'wrap'}>
          <List>
            <Item>
              <Link href={'https://earlmefisto.github.io/desert/'}>
                <MyProjectsPosts src={postImage1} />
              </Link>
            </Item>
          </List>
          <List>
            <Item>
              <Link>
                <MyProjectsPosts src={postImage2} />
              </Link>
            </Item>
          </List>
          <List>
            <Item>
              <MyProjectsPosts src={postImage3} />
            </Item>
          </List>
        </FlexWrapper>
      </Container>
    </StyledMyProjects>
  )
}
