import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useConversations } from "../context/conversationsProvider";
const OpenCoversation = () => {
  const [text, setText] = useState();
  const { sendMessage, selectedConversation } = useConversations();
  function handleSubmit(e) {
    e.preventDefault();

    sendMessage(
      selectedConversation.recipients.map((r) => r.id),
      text
    );
    setText("");
  }
  function handleKeyDown(e) {
    e.preventDefault();

    if (e.key === "Enter") {
      sendMessage(
        selectedConversation.recipients.map((r) => r.id),
        text
      );
      setText("");
    }
  }

  return (
    <div className="d-flex flex-column flex-grow-1 mx-3 card bg-dprimary p-2 rounded elvation-5 ">
      <div className="flex-grow-1 overflow-auto   mb-2">
        <div className="h-100 d-flex flex-column align-items-start justify-content-end px-3">
          {selectedConversation.messages.map((msg, index) => {
            console.log(msg);
            return (
              <div
                key={index}
                className={`d-flex flex-colum py-2 ${
                  msg.fromMe ? "align-self-end" : ""
                }`}
              >
                <div
                  className={`br px-2 py-1 ${
                    msg.fromMe ? "bg-primary" : "border"
                  }`}
                >
                  {msg.text}
                </div>
                <br></br>
                <div
                  className={`text-muted small mx-2 my-1 ${
                    msg.fromMe ? "text-right" : ""
                  }`}
                >
                  {msg.fromMe ? "You" : msg.senderName}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <InputGroup>
            <Form.Control
              className="br bg-dark border-0 text-light"
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ height: "60px", resize: "none" }}
            ></Form.Control>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
};

export default OpenCoversation;
