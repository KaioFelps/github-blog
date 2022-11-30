import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DefaultLayout } from "./Layout";
import { Article, ArticleFallBack } from "./pages/Article";
import { Blog } from "./pages/Blog";

export function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          index: true,
          element: <Blog />,
        },
        {
          path: "post",
          element: <ArticleFallBack />,
        },
        {
          path: "post/:slug",
          element: <Article />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
