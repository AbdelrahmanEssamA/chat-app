import Login from "./Login";
import React from "react";
import Dashboard from "./Dashboard";
import useLocalStorage from "../Hooks/useLocalStorage";
import { ContactsProvider } from "../context/contactsProvider";
import { ConversationsProvider } from "../context/conversationsProvider";
import { SocketProvider } from "../context/socketProvider";

function App() {
  const [id, setId] = useLocalStorage();
  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );
  return (
    <div className="App">{id ? dashboard : <Login onIdSubmit={setId} />}</div>
  );
}

export default App;
