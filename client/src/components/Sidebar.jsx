import React, { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import Contacts from "./Contacts";
import Coversations from "./Coversations";
import NewContactModal from "./NewContactModal";
import NewCoversationModal from "./NewCoversationModal";
const Sidebar = ({ id }) => {
  const [activeKey, setActiveKey] = useState("coversations");
  const [modalOpen, setModalOpen] = useState(false);
  const conversationOpen = activeKey === "coversations";
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div style={{ width: "300px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center border-0 ">
          <Nav.Item>
            <Nav.Link
              className="text-light bg-dprimary"
              eventKey="coversations"
            >
              Conversations
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="text-light bg-dprimary mx-1 "
              eventKey="contacts"
            >
              Contacts
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className=" card br bg-dprimary elvation-5 p-3 overflow-auto flex-grow-1">
          <Tab.Pane eventKey="coversations">
            <Coversations />
          </Tab.Pane>
          <Tab.Pane eventKey="contacts">
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="card  my-2 p-2 small bg-dark rounded elvation-5">
          Your Id : <span className="text-muted">{id}</span>
        </div>
        <Button
          variant="light"
          className=" rounded"
          onClick={() => setModalOpen(true)}
        >
          New {conversationOpen ? "Coversation" : "Contact"}
        </Button>
      </Tab.Container>
      <Modal show={modalOpen} onHide={closeModal}>
        {conversationOpen ? (
          <NewCoversationModal closeModal={closeModal} />
        ) : (
          <NewContactModal closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
};

export default Sidebar;
