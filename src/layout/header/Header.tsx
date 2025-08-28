import styled from "styled-components";
import { DayMode } from "./dayMode/DayMode";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { thems } from "../../styles/Thems";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { FlexWrapper } from "../../shared/components/FlexWrapper";

export const Header = () => {
  return (
    <StyledHeader>
      <FlexWrapper direction={"column"}>
        <DayMode />
        <HeaderMenu />
        <MobileMenu />
      </FlexWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 21px;
  min-height: 650px;

  position: fixed;
  top: 20px;
  right: 200px;
  z-index: 99999;

  /* border: 3px solid ${thems.colors.title}; */

  @media ${thems.media.smallDisplay} {
    display: none;
  }
`;
