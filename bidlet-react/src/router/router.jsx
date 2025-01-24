import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);
