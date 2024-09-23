import React from 'react'
import styled from 'styled-components'


export const NumberSelector = ({error,setError,isSelectedNumber,setIsSelectedNumber}) => {

    const arrayNumber = [1,2,3,4,5,6];

    

    const numberSelectorHandler = (value) => {
      setIsSelectedNumber(value)
      setError("");
    }

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
        <div className='flex'>
        {arrayNumber.map((value,i) => 
            <Box key={i}
            isselected = {value === isSelectedNumber } 
            onClick={() => numberSelectorHandler(value)}
            >
                {value}
            </Box>
        )}
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
  .error {
    color: red;
  }

`;

const Box = styled.div`
    cursor: pointer;
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display:  grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isselected ? "black" : "white")};
    color: ${(props) => (!props.isselected ? "black" : "white")};

    &:hover {
        background-color: ${(props) => (props.isselected ? 'black' : '#f0f0f0')};
    }
    `;
