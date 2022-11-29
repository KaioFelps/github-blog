import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
}
