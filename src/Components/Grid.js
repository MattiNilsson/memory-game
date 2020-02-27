import React, { useState } from "react";
import { makeGrid } from "../utilities/makeGrid"
import styled from "styled-components";

const Container = styled.aside`
.overAll{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.gameBoard{
  display:flex;
  width: 80%;
  height: 80%;
  justify-content: space-evenly;
  align-items: space-evenly;
}

.column{
  display:flex;
  flex-direction: column;
}

.card{
  border: 2px solid black;
  border-radius: 20px;
  margin-top: 20px;
  width: 100px;
  height: 150px;
}
`

function Grid(){
  const [grid, changeGrid] = useState(makeGrid("normal"))
  console.log(grid);
  return (
    <Container>
      <div className="overAll">
        <h1>Memory</h1>
        <div className="gameBoard">
          {grid.map((column, columnID) =>{
            return(
              <div key={columnID} className="column">
                {column.map((card, cardID) =>{
                  return(<div key={cardID} className="card" style={{backgroundColor : card.color}}></div>)
                })}
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  )
}

export default Grid;