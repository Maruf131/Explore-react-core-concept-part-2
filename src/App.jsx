import { Suspense } from "react";
import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import LoadData from "./LoadData";
import Player from "./Player";
import Users from "./Users";

// load data from Api
const loadUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

function App() {
  // normal function
  function handleClicked() {
    alert('Button clicked')
  }
  // arrow function
  const handleClicked2 =()=>{
    alert('Button clicked 2')
  }
  // pass parameter 
  const addToFive = (num) =>{
    alert (num + 3)
  }
  return (
    <>
      <h1>Vite + React</h1>
      <Suspense fallback={<h3>Loading.....</h3>}>
        <LoadData loadUsers={loadUsers}></LoadData>
      </Suspense>
      <Friends></Friends>
      <Users></Users>
      <Player></Player>
      <Counter></Counter>
      <button onClick={handleClicked}>Clicked</button>
      <button onClick={handleClicked2}>Clicked2</button>
      <button onClick={()=> alert('button clicked 3')}>Clicked3</button>
      <button onClick={() => addToFive(5)}>Clicked4</button>
    </>
  );
}

export default App;
