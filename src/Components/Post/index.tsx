import { Header, Layout, Lead } from "./style";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface PostProps {
  to: string;
  title: string;
  lead: string;
  createdAt: string;
}

export function Post(props: PostProps) {
  return (
    <Layout to={props.to}>
      <Header>
        <h2>{props.title}</h2>
        <span>
          {formatDistanceToNow(new Date(props.createdAt), {
            locale: ptBR,
          })}
        </span>
      </Header>

      <Lead
        components={{
          strong: "span",
        }}
        allowedElements={["p", "strong", "span"]}
      >
        {props.lead}
      </Lead>
    </Layout>
  );
}
