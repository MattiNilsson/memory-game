export const makeGrid = (diff) =>{
  let colors = randomizeColors(diff);
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
          x : i,
          y : j,
        }
        whatColor++;
      }
    }
  }
  if(diff === "easy"){
    for(let i = 0; i < 4; i++){
      grid[i] = [];
      for(let j = 0; j < 3; j++){
        grid[i][j] = {
          visable : false,
          cleared : false,
          color : colors[whatColor],
          x : i,
          y : j,
        }
        whatColor++;
      }
    }
  }
  if(diff === "baby"){
    for(let i = 0; i < 4; i++){
      grid[i] = [];
      for(let j = 0; j < 2; j++){
        grid[i][j] = {
          visable : false,
          cleared : false,
          color : colors[whatColor],
          x : i,
          y : j,
        }
        whatColor++;
      }
    }
  }
  return grid;
}

function randomizeColors(diff){
  if(diff === "normal"){
    let randomColors = [];
    let colors = [
      {color : "gray", amount : 2},
      {color : "blue", amount : 2},
      {color : "red", amount : 2},
      {color : "purple", amount : 2},
      {color : "pink", amount : 2},
      {color : "yellow", amount : 2},
      {color : "orange", amount : 2},
      {color : "brown", amount : 2},
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
    return randomColors;
  }
  if(diff === "easy"){
    let randomColors = [];
    let colors = [
      {color : "gray", amount : 2},
      {color : "blue", amount : 2},
      {color : "red", amount : 2},
      {color : "purple", amount : 2},
      {color : "pink", amount : 2},
      {color : "yellow", amount : 2},
    ]
    for(let i = 0; i < 12; i++){
      let randomNumber = Math.floor(Math.random() * Math.floor(colors.length));
      if(colors[randomNumber].amount > 0){
        colors[randomNumber].amount -= 1;
        randomColors[i] = colors[randomNumber].color;
      }
      if(colors[randomNumber].amount === 0){
        colors.splice(randomNumber, 1);
      }
    }
    return randomColors;
  }
  if(diff === "baby"){
    let randomColors = [];
    let colors = [
      {color : "gray", amount : 2},
      {color : "blue", amount : 2},
      {color : "red", amount : 2},
      {color : "purple", amount : 2},
    ]
    for(let i = 0; i < 8; i++){
      let randomNumber = Math.floor(Math.random() * Math.floor(colors.length));
      if(colors[randomNumber].amount > 0){
        colors[randomNumber].amount -= 1;
        randomColors[i] = colors[randomNumber].color;
      }
      if(colors[randomNumber].amount === 0){
        colors.splice(randomNumber, 1);
      }
    }
    return randomColors;
  }
}