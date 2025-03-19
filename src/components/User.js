// Funtional Component is function

import { useState } from "react";

// which returns piece of JSX
const User = (props) => {
  const { name, location } = props;
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);

  return (
    <div className="user-card">
      <h1>
        Count1 : {count}{" "}
        <button
          onClick={() => {
            const modifiedCount = count + 1;
            setCount(modifiedCount);
          }}
        >
          Increase Count
        </button>
      </h1>
      <h1>Name : {name}</h1>
      <h1>Adddress : {location}</h1>
      <h1>Contact : @yaseen</h1>
    </div>
  );
};

export default User;
