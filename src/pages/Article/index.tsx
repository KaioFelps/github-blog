import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { PostHeader } from "../../Components/PostHeader";
import { Layout, ArticleContainer } from "./style";

type PostProps = {
  authorGithub: string;
  createdAt: string;
  githubLink: string;
  title: string;
  body: string;
};

export function Article() {
  const [post, setPost] = useState({} as PostProps);
  const { slug } = useParams();

  const fetchSpecificPost = useCallback(async () => {
    const url = `https://api.github.com/repos/kaiofelps/github-blog/issues/${Number(
      slug
    )}`;
    const res = await axios.get(url);
    const data = await res.data;

    setPost({
      title: data.title,
      createdAt: data.created_at,
      githubLink: data.html_url,
      body: data.body,
      authorGithub: data.user.login,
    });
  }, [slug]);

  useEffect(() => {
    fetchSpecificPost();
  }, [fetchSpecificPost]);

  return (
    <Layout>
      <PostHeader post={post} />

      <ArticleContainer>
        <ReactMarkdown>
          {post.body ? post.body : "Artigo não encontrado."}
        </ReactMarkdown>
      </ArticleContainer>
    </Layout>
  );
}
