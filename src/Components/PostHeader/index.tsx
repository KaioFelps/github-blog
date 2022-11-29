import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR/index.js";
import { useCallback, useEffect, useMemo, useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaAngleLeft, FaCalendarDay, FaGithub } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
import { useContextSelector } from "use-context-selector";
import { PostsContext } from "../../Contexts/PostsContext";
import { Footer, Header, Layout } from "./style";

export function PostHeader() {
  const [authorName, setAuthorName] = useState("");
  const { posts, fetchPosts } = useContextSelector(
    PostsContext,
    ({ posts, fetchPosts }) => {
      return {
        posts,
        fetchPosts,
      };
    }
  );
  const fetchUsersData = useCallback(async () => {
    const response = await axios.get("https://api.github.com/users/kaiofelps");
    const data = await response.data;

    setAuthorName(data.login);
  }, []);
  const { slug } = useParams();

  useEffect(() => {
    fetchPosts();
    fetchUsersData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchUsersData]);

  const activePost = useMemo(() => {
    return posts.find((post) => {
      return Number(post.id) === Number(slug);
    });
  }, [posts, slug]);

  return (
    <Layout>
      <Header>
        <NavLink to="/">
          <FaAngleLeft size={14} />
          voltar
        </NavLink>

        <a href={activePost ? activePost.githubUrl : undefined} target="blank">
          Ver no github
          <BsBoxArrowUpRight size={12} />
        </a>
      </Header>

      <h1>{activePost ? activePost.title : "Post inexistente"}</h1>

      <Footer>
        <span>
          <FaGithub size={18} />
          {authorName}
        </span>
        <span>
          <FaCalendarDay size={18} />
          {activePost
            ? `Há ${formatDistanceToNow(new Date(activePost.createdAt), {
                locale: ptBR,
              })}`
            : null}
        </span>
      </Footer>
    </Layout>
  );
}
