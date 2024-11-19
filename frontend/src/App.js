import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./routes/login";

import { ChakraProvider } from "@chakra-ui/react";
import Menu from "./routes/menu";

import { AuthProvider } from "./contexts/useauth";

function App() {
  return (
    <>
      <ChakraProvider>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Menu />} />
            </Routes>
          </AuthProvider>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
