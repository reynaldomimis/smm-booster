import React, { useState } from "react";
import CSearch from "../../components/CSearch/CSearch";
import { tabList, orderListMenu as tabs } from "../../context/ListData";
import "./styled.scss";

const PListOrder = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleDelete = (id) => {
    console.log(`Deleting task with id: ${id}`);
  };

  const handleView = (id) => {
    console.log(`Viewing task with id: ${id}`);
  };

  return (
    <div className="list-order">
      <nav className="list-wrap">
        <ul>
          {tabs.map((item, i) => (
            <li
              key={i}
              style={{
                backgroundColor: item.id === selectedTab ? "#87c5ff" : "",
                borderRadius: item.id === selectedTab ? "5px" : "",
                color: item.id === selectedTab ? "#181a26" : "",
              }}
              onClick={() => handleTabClick(item.id)}
            >
              {item.tab}
            </li>
          ))}
        </ul>
        <div className="lsearch">
          <CSearch />
        </div>
      </nav>
      <table className="table table-hover table-borderless table-fit table-responsive">
        <thead>
          <tr>
            <th>ID</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Last Update</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tabList[selectedTab].map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.subject}</td>
              <td>{task.status}</td>
              <td>{task.lastUpdate}</td>
              <td>
                <button
                  style={{ marginRight: "8px" }}
                  type="button"
                  className="btn btn-info btn-sm"
                  onClick={() => handleView(task.id)}
                >
                  View
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PListOrder;
