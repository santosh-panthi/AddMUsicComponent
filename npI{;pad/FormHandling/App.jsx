import React, { useState } from "react";
import Cards from "./Components/FormHandling/Cards";
import Form from "./Components/FormHandling/Form";

function App() {
  const [users, setUsers] = useState([]);
  const handleFormSubmitData = (data) => {
    setUsers([...users,data]);
  };

  const handleRemove = (id) => {
    setUsers(users.filter((user, index) => index!== id));
  }
  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
      <div className="container mx-auto">
        <Cards handleRemove={handleRemove} users={users} />
        <Form handleFormSubmitData = {handleFormSubmitData}/>
      </div>
    </div>
  );
}

export default App;
