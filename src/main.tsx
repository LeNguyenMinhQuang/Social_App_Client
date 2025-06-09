import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import "antd/dist/reset.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/body/body.index.tsx";
import Login from "./components/login/login.index.js";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import ProtectedRoute from "./components/auth/protected.route.tsx";
import PublicRoute from "./components/auth/public.route.tsx";
import AuthProvider from "./components/auth/auth.provider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    errorElement: <p>404 Not Found</p>,
    children: [
      { index: true, element: <Body /> },
      { path: "user", element: <p>User</p> },
    ],
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </PersistGate>
  </Provider>
  // </StrictMode>
);
