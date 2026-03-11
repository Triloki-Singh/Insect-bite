import { createBrowserRouter, RouterProvider, Outlet, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Hero from "../pages/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import Contact from "../pages/Contact";

const Layout = () => {
  return (
    <>
        <Navbar />
        <main className="pb-4">
          <Outlet />
        </main>
        <Footer />
    </>
  );
};

const router = createBrowserRouter([ 
  {
    path: "/",
    element: <Layout />, // Layout wrapper
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      
      {
        path: "dashboard",
        element: <Hero />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
 ]);

const AppRoutes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRoutes;
