import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/Login.jsx";
import RegisterPage from "./Pages/register.jsx";
import ErrorPage from "./Pages/404.jsx";
import ProductsPage from "./Pages/products.jsx";
import ProfilePage from "./Pages/profile.jsx";
import DetailProductsPage from "./Pages/detailProducts.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Navbar from "./components/Layouts/Navbar.jsx";
import DarkModeContextProvider from "./context/DarkMode.jsx";
import { TotalPriceProvider } from "./context/TotalPriceContext.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: <div>Shap</div>,
      errorElement: <ErrorPage />,
   },
   {
      path: "/login",
      element: <LoginPage />,
   },
   {
      path: "/register",
      element: <RegisterPage />,
   },
   {
      path: "/products",
      element: <ProductsPage />,
   },
   {
      path: "/profile",
      element: <ProfilePage />,
   },
   {
      path: "/product/:id",
      element: <DetailProductsPage />,
   },
]);

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <Provider store={store}>
         {/* <Navbar /> */}
         <DarkModeContextProvider>
            <TotalPriceProvider>
               <RouterProvider router={router} />
            </TotalPriceProvider>
         </DarkModeContextProvider>
      </Provider>
   </StrictMode>
);
