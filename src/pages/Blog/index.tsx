import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useContextSelector } from "use-context-selector";
import { AuthorCard } from "../../Components/AuthorCard";
import { Post } from "../../Components/Post";
import { Warning } from "../../Components/Warning";
import { PostsContext } from "../../Contexts/PostsContext";
import { SearchForm } from "./Components/SearchForm";
import { Layout, PostsContainer, PostsHeader } from "./style";

export function Blog() {
  const { fetchPosts, posts } = useContextSelector(
    PostsContext,
    ({ fetchPosts, posts }) => {
      return {
        fetchPosts,
        posts,
      };
    }
  );

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <>
      <Helmet>
        <title>Github Blog</title>
        <meta
          name="description"
          content="Blog de Kaio Felipe, posts sobre tecnologia baseado no Github Issues."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <Layout>
        <AuthorCard />

        <PostsHeader>
          <h3>Publicações</h3>
          <span>
            {posts.length} {posts.length === 1 ? " publicação" : " publicações"}
          </span>
        </PostsHeader>

        <SearchForm />

        <PostsContainer noPostFound={posts.length <= 0}>
          {posts.length <= 0 ? (
            <Warning>Nada foi encontrado</Warning>
          ) : (
            posts.map((post) => {
              return (
                <Post
                  createdAt={post.createdAt}
                  lead={post.lead}
                  title={post.title}
                  to={`/post/${post.id}`}
                  key={post.id}
                />
              );
            })
          )}
        </PostsContainer>
      </Layout>
    </>
  );
}
