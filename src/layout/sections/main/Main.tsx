import photo from '../../../assets/img/IMG_5490.png'
import { Container } from '../../../shared/components/Container'
import { FlexWrapper } from '../../../shared/components/FlexWrapper'
import { Button } from '../../../shared/components/Button'
import {
  ButtonWrapper,
  GlobalStyledMain,
  Photo,
  PhotoWrapper,
  StyledMain,
  StyledTitle,
  Title,
  Text,
} from './Main.styles'

export const Main = () => {
  return (
    <GlobalStyledMain>
      <Container>
        <FlexWrapper>
          <StyledMain>
            <StyledTitle>
              <Title>
                I’m <span>Iryna Lebedeva</span>
              </Title>
            </StyledTitle>
            <Text>
              <strong>Frontend Developer</strong> passionate about crafting{' '}
              <strong>clean, efficient code</strong> and <strong>intuitive user experiences</strong>
              . With 6+ months of experience, I build SPAs using{' '}
              <strong>TypeScript, React, Redux, RTK Query, HTML and CSS(SCSS)</strong> and I'm
              currently expanding my toolkit with <strong>Next.js</strong>. <br />I believe in
              writing <strong>maintainable and scalable solutions</strong> and actively follow
              industry updates to apply market-leading practices. I am also continuously improving
              my English language skills.
            </Text>
            <ButtonWrapper>
              <Button>More about me</Button>
            </ButtonWrapper>
          </StyledMain>
          <PhotoWrapper>
            <Photo src={photo} alt="My photo" />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </GlobalStyledMain>
  )
}
