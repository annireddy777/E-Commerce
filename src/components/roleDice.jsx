import styled from "styled-components"


import dice1 from "../assets/dices/dice_1.png";
import dice2 from "../assets/dices/dice_2.png";
import dice3 from "../assets/dices/dice_3.png";
import dice4 from "../assets/dices/dice_4.png";
import dice5 from "../assets/dices/dice_5.png";
import dice6 from "../assets/dices/dice_6.png";


const diceImages = {
  1: dice1,
  2: dice2,
  3: dice3,
  4: dice4,
  5: dice5,
  6: dice6,
};

export const RoleDice = ({currentDice,roleDice}) => {



  return (
    <DiceContainer>
    <div className="dice" onClick={roleDice}>
      <img src={diceImages[currentDice]}  alt="Logo" />
    </div>
    <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
