import React from "react";

import { VStack, Button } from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const { register_user } = useAuth();

  const nav = useNavigate();

  const handleSignUp = () => {
    register_user(username, email, password, confirmPassword);
  };

  const handleNavigate = () => {
    nav("/login");
  };

  return (
    <VStack
      minH="500px"
      w="70%"
      maxW="400px"
      justifyContent="start"
      alignItems="start"
    >
      <Text mb="20px" color="gray.700" fontSize="44px" fontWeight="bold">
        Login
      </Text>
      <FormControl mb="20px">
        <FormLabel>Username</FormLabel>
        <Input
          bg="white"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          placeholder="Your username here"
        />
      </FormControl>
      <FormControl mb="20px">
        <FormLabel>Email</FormLabel>
        <Input
          bg="white"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Your email here"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          bg="white"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Your password here"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Confirm Password</FormLabel>
        <Input
          bg="white"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          type="password"
          placeholder="Your confirm password here"
        />
      </FormControl>
      
      <Button
        mb="10px"
        colorScheme="green"
        mt="20px"
        w="100%"
        onClick={handleSignUp}
      >
        Sign Up
      </Button>
      <Text
        onClick={handleNavigate}
        cursor="pointer"
        color="gray.600"
        fontSize="14px"
      >
        Already have an account? Log In
      </Text>
    </VStack>
  );
};

export default Register;
