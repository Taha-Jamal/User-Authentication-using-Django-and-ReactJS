import React from "react";

import { VStack, Button } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handelLogin = () =>{
      
  }

  return (
    <VStack>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
          type="email"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          type="password"
        />
      </FormControl>
      <Button onClick={handelLogin}>Login</Button>
    </VStack>
  );
};

export default Login;
