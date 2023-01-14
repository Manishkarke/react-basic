import React from "react";
import Card from "../UI/Card";
import style from "./UserList.module.css";

export default function UserList(props) {
  return (
    <Card className={style.users}>
      <ul>
        {props.userData.map((user) => {
          return (
            <li key={user.userId}>
              {user.userName} ({user.userAge} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
