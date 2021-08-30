import React from "react";
import { useConversations } from "../context/conversationsProvider";
import Sidebar from "./Sidebar";
import OpenCoversation from "./OpenCoversation";

const Dashboard = ({ id }) => {
  const { conversations, selectedConversation } = useConversations();

  return (
    <div className="row mx-1 ">
      <img
        src="https://pngimage.net/wp-content/uploads/2018/06/girl-laying-down-png.png"
        alt=""
        className="img"
      />
      <div className="d-flex" style={{ height: "85vh" }}>
        <Sidebar id={id} />
        {selectedConversation && <OpenCoversation />}
      </div>
    </div>
  );
};

export default Dashboard;
