import { VStack, Text, Button, Heading } from "@chakra-ui/react";

import { useEffect, useState } from "react";

import { logout } from "../api/endpoints";

import { get_notes } from "../api/endpoints";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [notes, setNotes] = useState([]);
  const nav = useNavigate()

  useEffect(() => {
    const fetchNotes = async () => {
      const notes = await get_notes();
      setNotes(notes);
    };
    fetchNotes();
  }, []);

  const handleLogout = async  () => {
       const success = await logout()
       if(success){
        nav('/login')
       }
  }

  return (
    <VStack>
      <Heading>Welcome back user</Heading>
      <VStack>
        {notes.map((note) => {
          return <Text> {note.description}</Text>;
        })}
      </VStack>
      <Button onClick={handleLogout} colorScheme="red">Logout</Button>
    </VStack>
  );
};

export default Menu;
