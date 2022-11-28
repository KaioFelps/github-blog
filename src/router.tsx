import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./Layout";
import { Article } from "./pages/Article";
import { Blog } from "./pages/Blog";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="post/:slug" element={<Article />} />
      </Route>
    </Routes>
  );
}
