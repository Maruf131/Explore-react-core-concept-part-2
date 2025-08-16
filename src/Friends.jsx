import { useEffect, useState } from "react";
import Friend from "./Friend";

export default function Friends() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div className="box">
      <h2>My total friends List</h2>
      <h3>Friends : {friends.length}</h3>
      {friends.map((friend) => (
        <Friend Friend={friend}></Friend>
      ))}
    </div>
  );
}

/**
 * 1. State to hold data
 * 2. Use effect with dependency array
 * 3. Use fetch to load data
 * 4. set loaded data to the state
 * 5. Display data
 */
