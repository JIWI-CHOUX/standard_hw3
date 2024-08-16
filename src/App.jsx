import React, { useState } from "react";
import Button from "./components/Button";
import User from "./components/user";


const App = () => {
  // const vagetable = ["감자", "고구마", "오이", "가지", "옥수수"];
  const [users, setUsers] = useState([
    {
      id: new Date().getTime() + 1,
      age: 30,
      name: "송중기",
    },
    {
      id: new Date().getTime() + 2,
      age: 24,
      name: "송강",
    },
    {
      id: new Date().getTime() + 3,
      age: 21,
      name: "김유정",
    },
    {
      id: new Date().getTime() + 4,
      age: 29,
      name: "구교환",
    },
  ]);

  const [age, ageState] = useState(0);
  const [name, nameState] = useState("");

  const style = { display: "flex", gap: "12px", padding: "50px" };

  const addUserHandler = () => {
    const newUser = {
      id: new Date().getTime(),
      age: Number(age),
      name: name,
    };

    setUsers([...users, newUser]);
  };

  const deleteUserHandler = (id) => {
    const deletedUsers = users.filter(function (user) {
      return user.id != id;
    });
    setUsers(deletedUsers);
  };

  return (
    <>
      <input
        type="number"
        value={age}
        onChange={(event) => {
          ageState(event.target.value);
        }}
      />
      <input
        type="text"
        value={name}
        onChange={(event) => {
          nameState(event.target.value);
        }}
      />
      <Button color="green" onClick={addUserHandler}>
        추가
      </Button>
      <div style={style}>
        {users
          .filter(function (u) {
            return u.age < 25;
          })
          .map(function (user) {
            return (
              <User
                key={user.id}
                user={user}
                deleteUserHandler={deleteUserHandler}
              />
            );
          })}
      </div>
    </>
  );
};

export default App;



