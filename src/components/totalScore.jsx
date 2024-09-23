import React from 'react'
import styled from 'styled-components'

export const TotalScore = ({score}) => {
  return (
    <ScoredContiner>
        <h1>{score}</h1>
        <p>Total Score</p>
    </ScoredContiner>
  )
}

const ScoredContiner = styled.div`
max-width: 200px;
text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
    margin: 0;
    padding: 0;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
    margin: 0;
    padding: 0;
  }
`;
