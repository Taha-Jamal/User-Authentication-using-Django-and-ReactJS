import { Heading } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";
const PrivateRoute = ({children}) => {
  const nav = useNavigate();
  const { isAuthenticated, loading } = useAuth();
  if (loading) {
    return <Heading>loading ...</Heading>;
  }
  if (isAuthenticated) {
    return children;
  } else {
    nav("/login");
    return null
  }
};

export default PrivateRoute;
