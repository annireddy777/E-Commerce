import {StartGame} from "./components/startGame";
import { useState } from "react";
import { Gameplay } from "./components/GamePlay"


const App = () => {
  const [isGameStarted,setIsGameStarted] = useState(false);


  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev)
  }

  return (
    <>
    {isGameStarted  ? <Gameplay/> : <StartGame toggle={toggleGamePlay}/> }
    </>
  )
}

export default App;
