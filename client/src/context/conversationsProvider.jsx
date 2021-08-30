import React, { useContext, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
import { useContacts } from "./contactsProvider";

const ConversationsContext = React.createContext();
export function useConversations() {
  return useContext(ConversationsContext);
}
export function ConversationsProvider({ id, children }) {
  const [conversations, setConversations] = useLocalStorage(
    "conversations",
    []
  );
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);
  const { contacts } = useContacts();

  function createConversation(recipients) {
    setConversations((prevConv) => {
      return [...prevConv, { recipients, messages: [] }];
    });
  }

  const addMessageToConv = ({ recipients, text, id }) => {
    console.log(id);
    setConversations((prevConv) => {
      let madeChange = false;
      const newMessage = { id, text };

      const newConv = prevConv.map((conv) => {
        if (arrayEquality(conv.recipients, recipients)) {
          madeChange = true;
          return {
            ...conv,
            messages: [...conv.messages, newMessage],
          };
        }
        return conv;
      });
      if (madeChange) {
        return newConv;
      } else {
        return [...prevConv, { recipients, messages: [newMessage] }];
      }
    });
  };
  function sendMessage(recipients, text) {
    console.log(id);
    addMessageToConv({ recipients, text, id });
  }
  const formattedConversations = conversations.map((conversation, index) => {
    const recipients = conversation.recipients.map((recipient) => {
      const contact = contacts.find((contact) => {
        return contact.id === recipient;
      });
      const name = (contact && contact.name) || recipient;
      return { id: recipient, name };
    });

    const messages = conversation.messages.map((message) => {
      const contact = contacts.find((contact) => {
        return contact.id === message.id;
      });
      const name = (contact && contact.name) || message.id;
      const fromMe = id === message.id;
      return { ...message, senderName: name, fromMe };
    });

    const selected = index === selectedConversationIndex;
    return { ...conversation, messages, recipients, selected };
  });

  const value = {
    conversations: formattedConversations,
    selectedConversation: formattedConversations[selectedConversationIndex],
    selectConversationIndex: setSelectedConversationIndex,
    createConversation,
    sendMessage,
  };
  return (
    <ConversationsContext.Provider value={value}>
      {children}
    </ConversationsContext.Provider>
  );
}
function arrayEquality(a, b) {
  if (a.length !== b.length) return false;

  a.sort();
  b.sort();

  return a.every((element, index) => {
    return element === b[index];
  });
}
