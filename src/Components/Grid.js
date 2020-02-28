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
  width: 55%;
  height: ${window.innerHeight / 1.2}px;
  justify-content: space-evenly;
  align-items: space-evenly;
}

.column{
  display:flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right : 10px;
  flex-grow: 1;
}

.card{
  border: 2px solid white;
  border-radius: 20px;
  margin-top: 20px;
  transition: .5 linear all;
  flex-grow: 1;
}
.visable{
  border : 2px solid white;
  transition: .5 linear all;
}
.hidden:hover{
  border: 2px solid blue;
  transition: .5 linear all;
}
`

function Grid(){
  const [grid, setGrid] = useState(makeGrid("normal"))
  const [check, setCheck] = useState(0)
  const [pair, setPair] = useState([]);
  console.log(grid);

  function showCard(grid, i, j){
    let newGrid = [...grid];
    let newPair = [...pair];
    newGrid[i][j].visable = (!newGrid[i][j].visable);
    newPair[check] = newGrid[i][j];
    setPair(newPair)
    setCheck(check + 1);
    setGrid(newGrid);
  }
  console.log(pair)
  if(check === 2){
    if(pair[0].color === pair[1].color){
      console.log("FOUND PAIR")
      console.log(pair[0])
      let newGrid = [...grid];
      newGrid[pair[0].x][pair[0].y].cleared = true;
      newGrid[pair[1].x][pair[1].y].cleared = true;
      console.log(newGrid[pair[0].x][pair[0].y])
      setGrid(newGrid);
      setCheck(0);
      setPair([]);
    }
  }

  if(check === 3){
    console.log("not a pair..")
      let newGrid = [...grid];
      for(let i = 0; i < newGrid.length; i++){
        for(let j = 0; j < newGrid[i].length; j++){
          if(newGrid[i][j].cleared === false){
            newGrid[i][j].visable = false;
          }
        }
      }
      newGrid[pair[2].x][pair[2].y].visable = true;
    setGrid(newGrid);
    setCheck(1);
    setPair([pair[2]]);
  }


  return (
    <Container>
      <div className="overAll">
        <h1>Memory</h1>
        <div className="gameBoard">
          {grid.map((column, columnID) =>{
            return(
              <div key={columnID} className="column">
                {column.map((card, cardID) =>{
                  return(<div 
                    key={cardID} 
                    className={"card " + (card.visable ? "visable" : "hidden")} 
                    style={{backgroundColor : card.visable ? card.color : "black"}}
                    onClick={(e) => showCard(grid, columnID, cardID)}
                    >
                      
                    </div>)
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