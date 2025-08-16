import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Player from "./Player";
import Users from "./Users";

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
