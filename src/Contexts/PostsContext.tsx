import axios from "axios";
import { ReactNode, useCallback, useState } from "react";
import { createContext } from "use-context-selector";

type PostProps = {
  title: string;
  createdAt: string;
  lead: string;
  id: number;
  githubUrl: string;
};

type PostsContextProps = {
  posts: PostProps[];
  fetchPosts: (query?: string) => Promise<void>;
};

type PostsContextProviderProps = {
  children: ReactNode;
};

export const PostsContext = createContext({} as PostsContextProps);

export function PostsContextProvider({ children }: PostsContextProviderProps) {
  const [posts, setPosts] = useState<PostProps[]>([]);

  const fetchPosts = useCallback(async (query?: string) => {
    const url = `https://api.github.com/search/issues?q=${
      query || ""
    }repo:kaiofelps/github-blog`;
    const res = await axios.get(url);
    const data = await res.data;

    const postsHolder: PostProps[] = [];

    data.items.forEach((post: any) => {
      const obj: PostProps = {
        title: post.title,
        createdAt: post.created_at,
        lead: post.body,
        id: post.number,
        githubUrl: post.html_url,
      };

      postsHolder.push(obj);
    });

    setPosts(postsHolder);
  }, []);

  return (
    <PostsContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  );
}
