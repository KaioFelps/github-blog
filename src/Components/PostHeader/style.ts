import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  gap: 32px;

  span {
    display: flex;
    align-items: center;
    gap: 8px;

    font: ${(p) => p.theme["text-m"]};
    color: ${(p) => p.theme["base-400"]};

    svg {
      color: ${(p) => p.theme["base-500"]};
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  a {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 4px;

    svg {
      stroke-width: 1.5px;
    }
  }
`;

export const Layout = styled.section`
  width: 100%;
  background: ${(p) => p.theme["base-800"]};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  padding: 32px;
  transform: translateY(-50%);

  h1 {
    font: ${(p) => p.theme["title-l"]};
    color: ${(p) => p.theme["base-100"]};
    margin-bottom: 8px;
  }
`;
