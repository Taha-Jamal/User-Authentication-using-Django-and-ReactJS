import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./routes/login";
import Register from "./routes/register";

import { ChakraProvider } from "@chakra-ui/react";
import Menu from "./routes/menu";

import { AuthProvider } from "./contexts/Auth";
import PrivateRoute from "./components/private_route";
import Layout from "./components/layout";

function App() {
  return (
    <>
      <ChakraProvider>
        <Router>
          <AuthProvider>
            <Routes>
              <Route
                element={
                  <PrivateRoute>
                    <Layout>
                      <Menu />
                    </Layout>
                  </PrivateRoute>
                }
                path="/"
              />
              <Route
                element={
                  <Layout>
                    <Login />
                  </Layout>
                }
                path="/login"
              />
              <Route
                element={
                  <Layout>
                    <Register />
                  </Layout>
                }
                path="/register"
              />
            </Routes>
          </AuthProvider>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
