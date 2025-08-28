import styled from "styled-components";
import { thems } from "../../styles/Thems";

export const SectionTitle = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 124%;
  text-transform: capitalize;

  display: flex;
  justify-content: center;

  color: #5d478b;

  margin: 50px 20px;

  @media ${thems.media.mobile && thems.media.tablet && thems.media.laptop} {
    margin: 30px 20px;

    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 25px;
    line-height: 115%;
    text-transform: capitalize;
  }
`;
