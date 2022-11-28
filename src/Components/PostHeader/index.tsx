import { BsBoxArrowUpRight } from "react-icons/bs";
import {
  FaAngleLeft,
  FaCalendarDay,
  FaComment,
  FaGithub,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Footer, Header, Layout } from "./style";

export function PostHeader() {
  return (
    <Layout>
      <Header>
        <NavLink to="/">
          <FaAngleLeft size={14} />
          voltar
        </NavLink>

        <a href="/">
          Ver no github
          <BsBoxArrowUpRight size={12} />
        </a>
      </Header>

      <h1>Título da notícia aqui</h1>

      <Footer>
        <span>
          <FaGithub size={18} />
          githubhere
        </span>
        <span>
          <FaCalendarDay size={18} />
          há 1 dia
        </span>
        <span>
          <FaComment size={18} />
          comentários
        </span>
      </Footer>
    </Layout>
  );
}
