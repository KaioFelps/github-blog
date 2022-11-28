import styled from "styled-components";

export const AuthorInfoHeader = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;

  h1 {
    font: ${(p) => p.theme["title-l"]};
    color: ${(p) => p.theme["base-100"]};
  }

  a svg {
    margin-left: 8px;
  }
`;

export const AuthorInfoContent = styled.span`
  display: flex;
  gap: 24px;
  margin-top: 24px;

  span {
    font: ${(p) => p.theme["text-m"]};
    color: ${(p) => p.theme["base-200"]};
    display: flex;
    align-items: center;
    gap: 8px;
  }

  svg {
    color: ${(p) => p.theme["base-500"]};
  }
`;

export const AuthorBio = styled.p`
  font: ${(p) => p.theme["text-m"]};
  color: ${(p) => p.theme["base-300"]};

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`;

export const AuthorInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProfilePicture = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
  margin-right: 32px;
`;

export const Layout = styled.section`
  width: 100%;
  padding: 32px;
  border-radius: 10px;
  background: ${(p) => p.theme["base-800"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  transform: translateY(-30%);
  position: relative;

  display: flex;
`;
