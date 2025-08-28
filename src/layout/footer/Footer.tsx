import styled from "styled-components";
import { FlexWrapper } from "../../shared/components/FlexWrapper";
import { Icon } from "../../shared/components/Icon";

export const Footer = () => {
  return (
    <FlexWrapper>
      <IconWrapper>
        <Icon
          iconId={"copyright"}
          width={"24px"}
          height={"24px"}
          viewBox={"0 0 24px 24px"}
        />
      </IconWrapper>
      <Copyright>2025 All Rights Reserved by Irina Lebedeva</Copyright>
    </FlexWrapper>
  );
};

const IconWrapper = styled.div`
  margin: 18px 15px 0;
`;

const Copyright = styled.small`
  padding: 18px 0;

  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 160%;
  text-transform: capitalize;
`;
