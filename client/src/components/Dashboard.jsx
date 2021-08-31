import React from "react";
import { useConversations } from "../context/conversationsProvider";
import Sidebar from "./Sidebar";
import OpenCoversation from "./OpenCoversation";

const Dashboard = ({ id }) => {
  const { selectedConversation } = useConversations();

  return (
    <div className="row mx-1 mt-3">
      <div className="d-flex" style={{ height: "95vh" }}>
        <Sidebar id={id} />
        {selectedConversation && <OpenCoversation />}
      </div>
    </div>
  );
};

export default Dashboard;
