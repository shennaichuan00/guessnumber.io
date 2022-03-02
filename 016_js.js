//随机生成1~100的随机整数
let randomNumber=Math.floor(Math.random()*100)+1;
//保存猜的数字
const guesses=document.querySelector('.guesses');
//猜的结果判定（对/错）
const lastResult=document.querySelector('.lastResult');

//猜的大小判定（猜小了，猜大了）
const lowOrHi=document.querySelector('.lowOrHi');


const guessSubmit=document.querySelector('.guessSubmit');
//指向input输入框
const guessField=document.querySelector('.guessField');

const rnumber=document.querySelector('.random_num');
//设定初始猜测次数为1
let guessCount=1;
//定义重置按钮
let resetButton;



function checkGuess(){
let userGuess=Number(guessField.value);

rnumber.textContent='随机的数为：'+randomNumber;

if(guessCount===1){
guesses.textContent='上次猜的数';
}
 guesses.textContent+=userGuess+' ';


if(userGuess===randomNumber){
lastResult.textContent='恭喜你！猜对了';

lastResult.style.backgroundColor='green';
lastResult.style.color='white';

lowOrHi.textContent='';

setGameOver();

}else if(guessCount===10){
lastResult.textContent='!!!GAME OVER!!!';
setGameOver();

}else{

lastResult.textContent='你猜错了！';
lastResult.style.backgroundColor='red';
lastResult.style.color='white';
if(userGuess<randomNumber){
lowOrHi.textContent='你猜小了！';

}else if(userGuess>randomNumber){
lowOrHi.textContent='你猜大了！';
}

}

guessCount++;
guessField.value='';
guessField.focus();

}
function setGameOver(){
guessField.disabled=true;

guessSubmit.disabled=true;
resetButton=document.createElement('button');
resetButton.textContent='开始新游戏';
document.body.appendChild(resetButton);
resetButton.addEventListener('click',resetGame);

}

function resetGame(){
guessCount=1;
const resetParas=document.querySelectorAll('.resetParas p');
for(let i=0;i<resetParas.length;i++){
  resetParas[i].textContent='';
}
resetButton.parentNode.removeChild(resetButton);
guessField.disabled=false;
guessSubmit.disabled=false;
guessField.value='';
guessField.focus();
randomNumber=Math.floor(Math.random()*100)+1;
}
guessSubmit.addEventListener('click',checkGuess);