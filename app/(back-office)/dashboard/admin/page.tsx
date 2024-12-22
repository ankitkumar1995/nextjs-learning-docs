import UsersCard from "@/app/components/cards/UsersCard";
import React from "react";

const AdminPage = () => {
  return (
    <div>
      page
      <div className="w-full lg:w-2/3">
        <UsersCard type="student" />

        <UsersCard type="teacher" />
        <UsersCard type="parnet" />
        <UsersCard type="staff" />
      </div>
      <div className="w-full lg:w-1/3"></div>
    </div>
  );
};

export default AdminPage;
