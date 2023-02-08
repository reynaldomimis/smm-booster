import React from "react";
import "../styled.scss";

export const SidebarLabel = ({ label, icon }) => {
  return (
    <>
      <div className="sidelabel">
        <span class="material-symbols-outlined">{icon}</span>
        <strong>{label}</strong>
      </div>
    </>
  );
};
