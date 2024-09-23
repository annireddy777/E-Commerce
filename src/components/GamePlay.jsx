import styled from "styled-components"
import { NumberSelector } from "./numberSelector"
import { TotalScore } from "./totalScore"
import {RoleDice} from "./roleDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styles/button";
import { Rules } from "./rules";



export const Gameplay = () => {

  const [isSelectedNumber,setIsSelectedNumber] = useState();
  const [currentDice,setCurrentDice] = useState(1);
  const [score,setScore] = useState(0);
  const [error,setError] = useState();
  const [showRules,setShowRules] = useState(false);

  const generateRandomNumber = (min,max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const roleDice = () => {

  if(!isSelectedNumber){
    setError("Please Select a Number");
    return;
  }
  setError("");
  const randomNumber = generateRandomNumber(1,7);
  setCurrentDice(randomNumber);

  if(isSelectedNumber === randomNumber){
    setScore((prev) => prev + randomNumber)
  }else{
    setScore((prev)=>prev - randomNumber)
  }
setIsSelectedNumber(undefined);
}

const resetScore = () => {
  setScore(0);
}
 
 
  return (
    <MainContainer>
        <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector
        error={error}
        setError={setError}
        isSelectedNumber={isSelectedNumber}
        setIsSelectedNumber={setIsSelectedNumber}/>
        </div>
        <RoleDice currentDice={currentDice}  roleDice={roleDice} />
        <div className="btns">
          <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
          <Button onClick={() => setShowRules(prev => !prev)}>{
            showRules ? "Hide" : "Show"
            }Rules</Button>
        </div> 

      {showRules && <Rules />}
    </MainContainer>
  )
}

const MainContainer = styled.div`
     padding-top: 70px;
     margin: 0 auto;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .btns{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

