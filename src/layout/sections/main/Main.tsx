import styled from "styled-components";
import { thems } from "../../../styles/Thems";
import photo from "../../../assets/img/IMG_5490.png";
import { Container } from "../../../shared/components/Container";
import { FlexWrapper } from "../../../shared/components/FlexWrapper";
import { Button } from "../../../shared/components/Button";

export const Main = () => {
  return (
    <GlobalStyledMain>
      <Container>
        <FlexWrapper>
          <StyledMain>
            <StyledTitles>
              <StyledMainTitleH1>
                I’m <span>Iryna Lebedeva</span>
              </StyledMainTitleH1>
            </StyledTitles>
            <StyledMainText>
              I'm a <strong>Frontend Developer</strong> passionate about
              crafting <strong>clean, efficient code</strong> and{" "}
              <strong>intuitive user experiences</strong>. With 6+ months of
              experience, I build SPAs using{" "}
              <strong>
                TypeScript, React, Redux, RTK Query, HTML and SCSS
              </strong>{" "}
              and I'm currently expanding my toolkit with{" "}
              <strong>Next.js</strong>. <br />I believe in writing{" "}
              <strong>maintainable and scalable solutions</strong> and actively
              follow industry updates to apply market-leading practices. I am
              also continuously improving my English language skills.
            </StyledMainText>
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
  );
};

const GlobalStyledMain = styled.section``;

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 25px;
  background-color: ${thems.colors.secondaryBg};
`;

const StyledTitles = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: ${thems.colors.title};

  span {
    color: ${thems.colors.accent};
  }
`;

const StyledMainTitleH1 = styled.h1`
  line-height: 124%;

  @media ${thems.media.tablet} {
    margin: 0 0 0 20px;
  }
`;

const StyledMainText = styled.p`
  display: block;
  max-width: 435px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;

  strong {
    color: ${thems.colors.title};
  }

  @media ${thems.media.mobile} {
    max-width: 281px;

    font-size: 16px;
  }
`;

const PhotoWrapper = styled.div`
  margin: 40px;

  position: relative;
  z-index: 0;

  &::before {
    content: "";
    width: 325px;
    height: 485px;
    border: 4px solid ${thems.colors.title};

    position: absolute;
    top: -20px;
    left: 20px;
    z-index: -1;

    @media ${thems.media.tablet} {
      border: none;
    }
  }
`;

const Photo = styled.img`
  width: 325px;
  height: 450px;
  object-fit: cover;
`;

const ButtonWrapper = styled.div`
  @media ${thems.media.mobile} {
    button {
      height: 50px;
    }
  }
`;
