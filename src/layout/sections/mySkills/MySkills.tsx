import styled from 'styled-components'
import { Skills } from './Skills/Skills'
import { Container } from '../../../shared/components/Container'
import { SectionTitle } from '../../../shared/components/SectionTitile'
import { FlexWrapper } from '../../../shared/components/FlexWrapper'

export const MySkills = () => {
  return (
    <StyledMySkills id={'skills'}>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap={'wrap'}>
          <Skills iconId={'iconJS'} viewBox={'0 0 24 24'} title={'Java Script'} />
          <Skills iconId={'iconHtml'} viewBox={'0 0 15 15'} title={'HTML'} />
          <Skills iconId={'iconCss'} viewBox={'0 0 15 15'} title={'CSS'} />
          <Skills iconId={'iconGit'} viewBox={'0 0 512 30'} title={'Git / GitHub'} />
          <Skills iconId={'iconReact'} viewBox={'0 0 32 32'} title={'React'} />
        </FlexWrapper>
      </Container>
    </StyledMySkills>
  )
}

const StyledMySkills = styled.section``
