import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useContextSelector } from "use-context-selector";
import { PostsContext } from "../../../../Contexts/PostsContext";

const searchFormSchema = zod.object({
  query: zod.string(),
});

type SearchFormInput = zod.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });
  const fetchPosts = useContextSelector(PostsContext, (context) => {
    return context.fetchPosts;
  });

  function handleSearchPost(data: SearchFormInput) {
    fetchPosts(data.query);
  }

  return (
    <form onSubmit={handleSubmit(handleSearchPost)}>
      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
    </form>
  );
}
