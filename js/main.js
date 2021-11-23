/*----- constants -----*/
const redCircleImg = "https://www.iconsdb.com/icons/preview/soylent-red/circle-xxl.png";
const blueCircleImg = "https://www.iconsdb.com/icons/preview/royal-blue/circle-xxl.png";


const lookup = {
  1: 'red',
  '-1': 'blue',
  null: 'white',
};

/*----- app's state (variables) -----*/
let board;
let turn;
let winner;


/*----- cached element references -----*/
const imgEl = document.querySelector('img');
const slotEls = document.querySelectorAll('td');
const tableRow = document.getElementsByTagName('tr');
const displayMessage = document.querySelector('h3');



/*----- event listeners -----*/
document.querySelector('table').addEventListener('click', handleMove);
document.querySelector('button').addEventListener('click', init);


/*----- functions -----*/ 
init();


function handleMove(e) {
  let col = e.target.cellIndex;
  let row = [];

  //Obtain the index of the bottom slot in the selected column
  for (let i = 5; i > -1; i--) {
    if (tableRow[i].children[col].style.background === 'white') {
      //Push the selected column to new array and store in a variable
      row.push(tableRow[i].children[col]);
      //use the first index of the new array to obtain the next available slot
        let cellIdx = row[0].id.replace('slt', '');
        board[cellIdx] = turn;
        turn *= -1;
        winner = //checkWinner();
        render();
    }
  }
  // console.log(row[0].id);
}


function checkWinner() {

}


function render() {
  board.forEach(function(sl, i) {
    slotEls[i].style.background = lookup[sl];
    return turn === 1 ? imgEl.src = redCircleImg : imgEl.src = blueCircleImg;
  });
}

function init() {
  board = [
    null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, 
  ];
  turn = 1;
  winner = null;
  render(); 
}



// function handleMove(e) {
//   const idx = parseInt(e.target.id.replace('slt', ''));
//   if (board[idx] !== null) return;
//   board[idx] = turn;
//   turn *= -1;
//   winner = checkWinner();
//   render();
// }