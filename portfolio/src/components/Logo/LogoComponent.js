import styled from "styled-components";
import { theme } from "../../styles";

export const LogoComponent = styled.span`
  font-weight: 700;
  &::before {
    content: "Josiah";
    padding: 0 0.5rem;
    color: ${theme.textColor2};
  }

  &::after {
    content: "Mokobo";
    color: ${theme.textColor1};
  }
`;
