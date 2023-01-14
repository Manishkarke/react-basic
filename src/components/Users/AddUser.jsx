import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import style from "./AddUser.module.css";

export default function NewData(props) {
  const [userData, setUserData] = useState({
    userName: "",
    userAge: "",
    userId: 0,
  });

  const [error, setError] = useState();

  const userNameChangeHandler = (event) => {
    setUserData((prevState) => {
      return { ...prevState, userName: event.target.value };
    });
  };

  const ageChangeHandler = (event) => {
    setUserData((prevState) => {
      return { ...prevState, userAge: event.target.value };
    });
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (userData.userName.trim().length === 0) {
      return setError({
        title: "Invalid Input",
        message: "Please Enter A valid name and age (non-empty values)",
      });
    }

    if (!userData.userAge || +userData.userAge < 1 || +userData.userAge > 150) {
      return setError({
        title: "Invalid Age",
        message: "Please Enter a valid age ( >0 and < 150)",
      });
    }
    const data = userData;

    setUserData((prevState) => {
      return { userName: "", userAge: "", userId: prevState.userId + 1 };
    });

    props.onAddUser(data);
  };

  const errorHandler = () => {
    setError(undefined);
  };

  return (
    <div>
      {error === undefined ? (
        <Card className={style.input}>
          <form onSubmit={addUserHandler}>
            <div>
              <label htmlFor='userName'>Username</label>
              <input
                id='userName'
                type='text'
                value={userData.userName}
                onChange={userNameChangeHandler}
              />
            </div>

            <div>
              <label htmlFor='age'>Age(Years)</label>
              <input
                id='age'
                type='number'
                value={userData.userAge}
                onChange={ageChangeHandler}
              />
            </div>

            <Button
              type='submit'
              className='button'
            >
              Add Data
            </Button>
          </form>
        </Card>
      ) : (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
    </div>
  );
}
