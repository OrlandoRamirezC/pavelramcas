import { Home } from "../pages/Home";
import { Work } from "../pages/Work";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Layout } from "../layouts/Layout";
import { createHashRouter } from "react-router";

export const router = createHashRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "work", element: <Work /> },
            { path: "contact", element: <Contact /> },
        ],
    },
]);