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
const displayMessage = document.querySelector('h3');



/*----- event listeners -----*/
document.querySelector('table').addEventListener('click', handleMove);
document.querySelector('button').addEventListener('click', init);



/*----- functions -----*/ 
init();

function init() {
  board = 
    [null, null, null, null, null, null, null, 
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
