import React, { useState, useCallback } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useConversations } from "../context/conversationsProvider";
const OpenCoversation = () => {
  const [text, setText] = useState();
  const { sendMessage, selectedConversation } = useConversations();
  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);
  function handleSubmit(e) {
    e.preventDefault();

    sendMessage(
      selectedConversation.recipients.map((r) => r.id),
      text
    );
    setText("");
  }

  return (
    <div className="d-flex flex-column flex-grow-1 mx-3 card bg-dprimary p-2 rounded elvation-5 ">
      <div className="flex-grow-1 overflow-auto   mb-2">
        <div className="d-flex flex-column align-items-start justify-content-end px-3">
          {selectedConversation.messages.map((msg, index) => {
            const lastMessage =
              selectedConversation.messages.length - 1 === index;
            return (
              <div
                ref={lastMessage ? setRef : null}
                key={index}
                className={`d-flex flex-colum py-2 ${
                  msg.fromMe ? "align-self-end" : ""
                }`}
              >
                <div
                  className={`br px-2 py-1 ${msg.fromMe ? "prim" : "border"}`}
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
