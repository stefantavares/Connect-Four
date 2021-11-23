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

  for (let i = 5; i > -1; i--) {
    if (tableRow[i].children[col].style.background === 'white') {
      row.push(tableRow[i].children[col]);
      if (turn === 1) {
        row[0].style.background = 'red';
        return turn = -1;
      }
      if (turn === -1) {
        row[0].style.background = 'blue';
        return turn = 1;
      }
    }
  }
  render();
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