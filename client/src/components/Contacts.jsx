import React from "react";
import { useContacts } from "../context/contactsProvider";
import { ListGroup } from "react-bootstrap";
const Contacts = () => {
  const { contacts } = useContacts();
  return (
    <ListGroup variant="flush">
      {contacts.map((contact) => (
        <ListGroup.Item className="bg-dprimary text-light" key={contact.id}>
          {contact.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Contacts;
