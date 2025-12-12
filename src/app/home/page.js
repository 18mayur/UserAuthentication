export const dynamic = "force-dynamic";

import React from "react";
import "./style.css";

const getUsers = async () => {
  let data = await fetch(
    "https://userauthentication-next.vercel.app/api/Userdata",
    { cache: "no-store" }
  );
  data = await data.json();
  if (data.success) {
    return data.result;
  } else {
    return { success: false };
  }
};
const home = async () => {
  const userlist = await getUsers();
  console.log("user list ", userlist);
  return (
    <div class="container">
      <table>
        <thead>
          <tr>
            <th>Sr. NO</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {userlist.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default home;
