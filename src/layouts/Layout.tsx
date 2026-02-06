import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router";

export const Layout = () => (
  <>
    <Header />
    <Navbar />
    <Outlet />
        <Footer />
  </>
);
