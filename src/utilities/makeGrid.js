export const makeGrid = (diff) =>{
  let colors = randomizeColors();
  let grid = [];
  let whatColor = 0;
  if(diff === "normal"){
    for(let i = 0; i < 6; i++){
      grid[i] = [];
      for(let j = 0; j < 3; j++){
        grid[i][j] = {
          visable : false,
          cleared : false,
          color : colors[whatColor],
        }
        whatColor++;
      }
    }
  }
  return grid;
}

function randomizeColors(){
  let randomColors = [];
  let colors = [
    {color : "gray", amount : 2},
    {color : "blue", amount : 2},
    {color : "red", amount : 2},
    {color : "purple", amount : 2},
    {color : "pink", amount : 2},
    {color : "yellow", amount : 2},
    {color : "black", amount : 2},
    {color : "white", amount : 2},
    {color : "cyan", amount : 2},
  ]
  for(let i = 0; i < 18; i++){
    let randomNumber = Math.floor(Math.random() * Math.floor(colors.length));
    if(colors[randomNumber].amount > 0){
      colors[randomNumber].amount -= 1;
      randomColors[i] = colors[randomNumber].color;
    }
    if(colors[randomNumber].amount === 0){
      colors.splice(randomNumber, 1);
    }
  }
  console.log(randomColors);
  console.log(colors);
  return randomColors;
}