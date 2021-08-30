import Login from "./Login";
import React from "react";
import Dashboard from "./Dashboard";
import useLocalStorage from "../Hooks/useLocalStorage";
import { ContactsProvider } from "../context/contactsProvider";
import { ConversationsProvider } from "../context/conversationsProvider";

function App() {
  const [id, setId] = useLocalStorage();
  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider id={id}>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  );
  return (
    <div className="App">{id ? dashboard : <Login onIdSubmit={setId} />}</div>
  );
}

export default App;
