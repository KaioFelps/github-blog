import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import { Navigate, useParams } from "react-router-dom";
import { PostHeader } from "../../Components/PostHeader";
import { Warning } from "../../Components/Warning";
import { Layout, ArticleContainer } from "./style";

type PostProps = {
  authorGithub: string;
  createdAt: string;
  githubLink: string;
  title: string;
  body: string;
};

export function Article() {
  const [post, setPost] = useState({} as PostProps | null);
  const { slug } = useParams();

  const fetchSpecificPost = useCallback(async () => {
    const url = `https://api.github.com/repos/kaiofelps/github-blog/issues/${Number(
      slug
    )}`;
    try {
      const res = await axios.get(url);
      const data = await res.data;

      setPost({
        title: data.title,
        createdAt: data.created_at,
        githubLink: data.html_url,
        body: data.body,
        authorGithub: data.user.login,
      });
    } catch (error) {
      console.clear();
      console.log(`Erro: ${error}`);
      setPost(null);
    }
  }, [slug]);

  useEffect(() => {
    fetchSpecificPost();
  }, [fetchSpecificPost]);

  return (
    <>
      <Helmet>
        {post === null ? (
          <>
            <title>Post indisponível</title>
            <meta name="description" content="Post indisponível" />
            <link rel="canonical" href={`/post/${slug}`} />
          </>
        ) : (
          <>
            <title>Blog: {String(post.title)}</title>
            <meta
              name="description"
              content={`Postagem do blog GitHub Blog, falando sobre ${String(
                post.title
              )}.`}
            />
          </>
        )}
        <link rel="canonical" href={`/post/${slug}`} />
      </Helmet>
      <Layout>
        {post === null ? (
          <>
            <PostHeader
              post={{
                authorGithub: "Indisponível",
                body: "",
                createdAt: undefined,
                githubLink: "",
                title: "",
              }}
            />
            <ArticleContainer>
              <Warning>Post indisponível ou descarregado.</Warning>
            </ArticleContainer>
          </>
        ) : (
          <>
            <PostHeader post={post} />

            <ArticleContainer>
              <ReactMarkdown>
                {post.body ? post.body : "Artigo não encontrado."}
              </ReactMarkdown>
            </ArticleContainer>
          </>
        )}
      </Layout>
    </>
  );
}

export function ArticleFallBack() {
  return <Navigate to="1" replace={true} />;
}
