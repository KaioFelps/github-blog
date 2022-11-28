import { AuthorCard } from "../../Components/AuthorCard";
import { Layout } from "./style";

export function Blog() {
  return (
    <Layout>
      <AuthorCard />

      <h1>Hello World</h1>
      <p>Welcome to the blog home page!</p>
    </Layout>
  );
}
