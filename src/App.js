import './App.css';
import { useState } from 'react';
import UserList from "./components/Users/UserList"
import AddUser from './components/Users/AddUser';

function App() {

  const [userList, setUserList] = useState([]);

  const newUserHandler = (user) => {
    setUserList((prevUserList) => {
      return [...prevUserList, user];
    });
  }
  return (
    <div className="container">
      <AddUser onAddUser={newUserHandler} />
      <UserList userData={userList} />
    </div>
  );
}

export default App;
