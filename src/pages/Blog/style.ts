import styled from "styled-components";

export const PostsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: min-content;
  gap: 32px;

  margin-top: 48px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const PostsHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  span {
    font: ${(p) => p.theme["text-s"]};
    color: ${(p) => p.theme["base-400"]};
  }
`;

export const Layout = styled.main`
  width: calc(100% - 40px);
  max-width: 864px;
  margin: auto;
`;
