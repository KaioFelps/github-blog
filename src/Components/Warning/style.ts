import styled from "styled-components";

export const WarningContainer = styled.span`
  width: 100%;
  border-radius: 10px;
  padding: 64px 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: hsl(358deg 60% 55%);
  background: hsla(358, 99.8%, 38.3%, 0.15);
  border: 2px solid hsl(358, 65%, 40.4%);

  font: ${(p) => p.theme["text-m"]};
`;
