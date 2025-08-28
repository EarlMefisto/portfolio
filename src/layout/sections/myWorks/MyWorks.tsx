import styled from "styled-components";
import { MyWorksPost } from "./myWorksPost/MyWorksPost";
import { TabMenu } from "./tabMenu/TabMenu";
import postImage1 from "../../../assets/img/0cbd17e4381497547009ce81acc4eee3.webp";
import postImage2 from "../../../assets/img/Alcohol_use-main.webp";
import postImage3 from "../../../assets/img/photo_2024-11-27_16-55-32.webp";
import { Container } from "../../../shared/components/Container";
import { SectionTitle } from "../../../shared/components/SectionTitile";
import { FlexWrapper } from "../../../shared/components/FlexWrapper";

const WorksItems = ["All", "Layout", "App", "Project"];

export const MyWorks = () => {
  return (
    <StyledMyWorks>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <FlexWrapper>
          <TabMenu menuItems={WorksItems} />
        </FlexWrapper>
        <FlexWrapper wrap={"wrap"}>
          <MyWorksList>
            <MyWorksItem>
              <MyWorksLink href={"https://earlmefisto.github.io/desert/"}>
                <MyWorksPost src={postImage1} />
              </MyWorksLink>
            </MyWorksItem>
          </MyWorksList>
          <MyWorksList>
            <MyWorksItem>
              <MyWorksLink>
                <MyWorksPost src={postImage2} />
              </MyWorksLink>
            </MyWorksItem>
          </MyWorksList>
          <MyWorksList>
            <MyWorksItem>
              <MyWorksLink></MyWorksLink>
              <MyWorksPost src={postImage3} />
            </MyWorksItem>
          </MyWorksList>
        </FlexWrapper>
      </Container>
    </StyledMyWorks>
  );
};

const StyledMyWorks = styled.section``;

const MyWorksList = styled.ul``;

const MyWorksItem = styled.li``;

const MyWorksLink = styled.a``;
