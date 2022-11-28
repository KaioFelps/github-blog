import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

export const Lead = styled(ReactMarkdown)`
  font: ${(p) => p.theme["text-m"]};
  line-height: 160%;
  color: ${(p) => p.theme["base-300"]};

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;

  h2 {
    flex: 1;
    font: ${(p) => p.theme["title-m"]};
    color: ${(p) => p.theme["base-100"]};
  }

  span {
    flex-shrink: 0;
    font: ${(p) => p.theme["text-s"]};
    color: ${(p) => p.theme["base-400"]};
  }
`;

export const Layout = styled(NavLink)`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  cursor: pointer;

  background: ${(p) => p.theme["base-700"]};
  border-radius: 10px;

  &:hover,
  &:focus {
    outline: 2px solid ${(p) => p.theme["base-500"]};
    transition: outline 50ms;
    filter: none;
  }
`;
