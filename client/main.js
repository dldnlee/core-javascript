import { diceAnimation, getNode, getNodes, insertLast } from "./lib/index.js";



// 1. 주사위 클릭시 diceAnimation 실행


const [rollingButton, recordButton, resetButton] = getNodes('.buttonGroup > button');

let count = 0;
let total = 0;

function createItem(value) {
  const template = `
  <tr>
    <td>${++count}</td>
    <td>${value}</td>
    <td>${total+= value}</td>
  </tr>
  `
  return template;
}

function renderRecordItem() {
  const diceValue = getNode('#cube').dataset.dice / 1;
  insertLast('.recordList tbody', createItem(diceValue));                
}

function handleRecord() {
  recordList.hidden = false;
  renderRecordItem();
}

const handleRollingDice = (() =>{
  let isClicked = false;
  let stopAnimation;
  

  return () => {
    if(!isClicked) {
      stopAnimation = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }
    isClicked = !isClicked;
  }

})();

const recordList = getNode('.recordListWrapper');
function handleReset() {
  recordList.hidden = true;
}

rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);