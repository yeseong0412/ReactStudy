import React from "react";

const User = ({userData}) =>{
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    );
}
export const UserList = () =>{
    const users = [
        {email: "user1@gmail.com", name: "유재석"},
        {email: "user2@gmail.com", name: "김종국"},
        {email: "user3@gmail.com", name: "하하"},
        {email: "user3@gmail.com", name: "송지호"},
    ];

    return (
      <table>
          <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
          </thead>
          <tbody>
                {users.map(user => <User userData={user}/>)}
          </tbody>
      </table>
    );
}