import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./componets/Card";
function App() {
  const [count, setCount] = useState(0);
  let myObj={
    username:"Hitesh",
    age:21
  }
  
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Taliwind Test
      </h1>
      <Card username="chai aur code" btnText="click me "/>
      <Card username="hirdesh mewada" btnText="Visit me"/>
    </>
  );
}

export default App;
