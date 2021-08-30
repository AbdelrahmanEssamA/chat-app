import React from "react";
import { ListGroup } from "react-bootstrap";
import { useConversations } from "../context/conversationsProvider";
const Coversations = () => {
  const { conversations, selectConversationIndex } = useConversations();
  return (
    <ListGroup variant="flush">
      {conversations.map((conv, index) => (
        <ListGroup.Item
          className={`${
            conv.selected ? "bg-primary rounded" : " bg-dprimary "
          } text-light m-1`}
          key={index}
          action
          onClick={() => {
            selectConversationIndex(index);
          }}
          active={conv.selected}
        >
          {conv.recipients.map((r) => r.name).join(", ")}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Coversations;
