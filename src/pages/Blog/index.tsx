import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import { AuthorCard } from "../../Components/AuthorCard";
import { Post } from "../../Components/Post";
import { PostsContext } from "../../Contexts/PostsContext";
// import { Post } from "../../Components/Post";
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
    <Layout>
      <AuthorCard />

      <PostsHeader>
        <h3>Publicações</h3>
        <span>
          {posts.length} {posts.length === 1 ? " publicação" : " publicações"}
        </span>
      </PostsHeader>

      <input type="text" placeholder="Buscar conteúdo" />

      <PostsContainer>
        {posts.map((post) => {
          return (
            <Post
              createdAt={post.createdAt}
              lead={post.lead}
              title={post.title}
              to={"/"}
              key={post.id}
            />
          );
        })}
      </PostsContainer>
    </Layout>
  );
}
