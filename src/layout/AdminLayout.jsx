import React from "react";
import Sidebar from "../pages/Admin/Components/Sidebar/Sidebar";

const AdminLayout = (props) => {
  return (
    <div className="row">
      <Sidebar />
      <main className="col-lg-10 my-5">
        {props.children}
      </main>
    </div>
  );
};

export default AdminLayout;
