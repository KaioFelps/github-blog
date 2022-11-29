import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { useContextSelector } from "use-context-selector";
import { PostHeader } from "../../Components/PostHeader";
import { PostsContext } from "../../Contexts/PostsContext";
import { Layout, ArticleContainer } from "./style";

export function Article() {
  const { posts } = useContextSelector(PostsContext, ({ posts }) => {
    return {
      posts,
    };
  });
  const { slug } = useParams();
  const activeArticle = posts.find((post) => post.id === Number(slug));
  return (
    <Layout>
      <PostHeader />

      <ArticleContainer>
        <ReactMarkdown>
          {activeArticle ? activeArticle.lead : "Artigo não encontrado."}
        </ReactMarkdown>
      </ArticleContainer>
    </Layout>
  );
}
