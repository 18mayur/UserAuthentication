// "use client";
// import { useEffect, useState } from "react";
export const dynamic = "force-dynamic";

import { getUsers } from "@/services/getUsers";
import "./style.css";

const home = async () => {
  // const [userList, setUserList] = useState([]);
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const user = await getUsers();
  //     setUserList(user);
  //     console.log("user list ", userList);
  //   };
  //   fetchUsers();
  // }, [userList]);
  const userList = await getUsers();
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
          {userList.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
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

// import React from 'react'

// export default async function home() {
//   const userList = await getUsers();
//   console.log("user list ", userList);
//   return (
//     <>
//       {userList.length <= 0 ? (
//         <div className="container">
//           <h1 className="text-[3rem] text-white">No user added in DB</h1>
//         </div>
//       ) : (
//         <div class="container">
//           <table>
//             <thead>
//               <tr>
//                 <th>Sr. NO</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Role</th>
//               </tr>
//             </thead>
//             <tbody>
//               {userList.map((item, index) => {
//                 return (
//                   <tr key={index}>
//                     <td>{index + 1}</td>
//                     <td>{item.name}</td>
//                     <td>{item.email}</td>
//                     <td>{item.role}</td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </>
//   );
// }
