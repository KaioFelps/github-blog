import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR/index.js";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaAngleLeft, FaCalendarDay, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Footer, Header, Layout } from "./style";

type PostProps = {
  authorGithub: string;
  createdAt: string | undefined;
  githubLink: string;
  title: string;
  body: string;
};

type PostHeaderProps = {
  post: PostProps;
};

export function PostHeader({ post }: PostHeaderProps) {
  return (
    <Layout>
      <Header>
        <NavLink to="/">
          <FaAngleLeft size={14} />
          voltar
        </NavLink>

        <a href={post ? post.githubLink : undefined} target="blank">
          Ver no github
          <BsBoxArrowUpRight size={12} />
        </a>
      </Header>

      <h1>{post ? post.title : "Post inexistente"}</h1>

      <Footer>
        <span>
          <FaGithub size={18} />
          {post.authorGithub}
        </span>
        <span>
          <FaCalendarDay size={18} />
          {post.createdAt !== undefined
            ? `Há ${formatDistanceToNow(new Date(post.createdAt), {
                locale: ptBR,
              })}`
            : null}
        </span>
      </Footer>
    </Layout>
  );
}
