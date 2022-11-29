import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: calc(100% - 40px);
  padding: 16px 0;
  max-width: 864px;
  margin: 0 auto;

  background: ${(p) => p.theme["base-800"]};
  box-shadow: 0 0 0 100vmax ${(p) => p.theme["base-800"]};
  clip-path: inset(0 -100vmax);

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font: ${(p) => p.theme["text-s"]};
    color: ${(p) => p.theme["base-400"]};
  }
`;
