import styled from "styled-components";
import { thems } from "../../../../styles/Thems";

export const Section = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding: 40px;

  border-radius: 2px;
  background-color: ${thems.colors.secondaryBg};

  @media ${thems.media.mobile} {
    padding: 30px;
  }

  @media ${thems.media.tablet} {
    padding: 25px;
  }

  textarea {
    resize: none;
    width: 350px;
    height: 210px;

    @media ${thems.media.mobile && thems.media.tablet} {
      width: 250px;
      height: 110px;
    }
  }
`;

export const Field = styled.input`
  width: 350px;
  padding: 10px;
  margin: 5px;

  color: white;
  background-color: ${thems.colors.primaryBg};
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 160%;

  border: 2px solid gray;
  border-radius: 2px;

  &:focus-visible {
    border-color: transparent;
    outline: 2px solid ${thems.colors.accent};
  }

  @media ${thems.media.mobile && thems.media.tablet} {
    width: 250px;
    padding: 5px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;

  margin-top: 20px;

  
  @media ${thems.media.mobile} {
    flex-direction: column;
    gap: 10px;

    margin: 20px 0;
  }

  @media ${thems.media.tablet} {
    flex-direction: column;

    margin: 10px 0;
  }
`;
