let gameBoard = (() => {
    const board = [];
    let gameContainer = document.querySelector('#gameBoard');
    for(let i = 0; i < 9; i++){
        let square = document.createElement('div');
        square.classList.toggle('square');
        square.classList.toggle(`square${i}`);
        //square.innerHTML= "X";
        gameContainer.appendChild(square);
    }
    return board;
})();

const players = (symbol, type, name) => {
    return{symbol, type, name};
};

const player1 = players('O', "human", "");
const player2 = players('X', "", "");

const gameStart = (() => {
    let startBtn = document.querySelector('.startBtn');
    let resetBtn = document.querySelector('.resetBtn');
    let gameContainer = document.querySelector('#gameBoard');

    startBtn.addEventListener('click', () => {
        gameContainer.style.display = "grid";
        resetBtn.style.display = "inline"
        startBtn.style.display = "none"
    });
})();

const gameReset = (() => {
    let startBtn = document.querySelector('.startBtn');
    let resetBtn = document.querySelector('.resetBtn');
    let gameContainer = document.querySelector('#gameBoard');
    const squares = document.querySelectorAll('.square');

    resetBtn.addEventListener('click', () => {
        //gameContainer.style.display = "grid";
        //startBtn.style.display = "inline"
        let aiBtn = document.querySelector('.aiMode');
        let twoPlayersBtn = document.querySelector('.twoPlayers');
        resetBtn.style.display = "none"
        for(let i = 0; i < 9; i++){
            gameBoard[i] = "";
        }
        squares.forEach((square) => {
            square.innerHTML = "";
        });
        aiBtn.style.display = "inline";
        twoPlayersBtn.style.display = "inline";
    });

})();

const gameFlow = (() => {

    const block = {
        mark: '',
    }
    const squares = document.querySelectorAll('.square');
    let currentSymbol = player1.symbol;
    let counter = 0;
    squares.forEach((square) => {
         
            square.addEventListener('click', (e) => {
                
                if(square.innerHTML === '') {
                square.innerHTML = currentSymbol;
                if(square.classList.contains("square0")){
                    gameBoard[0] = currentSymbol;
                }
                else if(square.classList.contains("square1")){
                    gameBoard[1] = currentSymbol;

                }
                else if(square.classList.contains("square2")){
                    gameBoard[2] = currentSymbol;

                }
                else if(square.classList.contains("square3")){
                    gameBoard[3] = currentSymbol;

                }
                else if(square.classList.contains("square4")){
                    gameBoard[4] = currentSymbol;

                }
                else if(square.classList.contains("square5")){
                    gameBoard[5] = currentSymbol;

                }
                else if(square.classList.contains("square6")){
                    gameBoard[6] = currentSymbol;

                }
                else if(square.classList.contains("square7")){
                    gameBoard[7] = currentSymbol;

                }
                else {
                    gameBoard[8] = currentSymbol;

                }

                let didWin = winCheck();
                if(didWin == true){
                    currentSymbol = player1.symbol;
                    return;
                }

                if(currentSymbol == player1.symbol && player2.type != 'AI') {
                    currentSymbol = player2.symbol;
                }
                else
                currentSymbol = player1.symbol;

                let aiChoice = 1;
                if(player2.type == 'AI'){

                while(aiChoice !== ""){
                aiChoice = Math.floor(Math.random()*9);
                //console.log(aiChoice);
                if (gameBoard[aiChoice] == "" || gameBoard[aiChoice]== undefined) {
                    gameBoard[aiChoice] = 'X';
                    let markSquare = document.querySelector(`.square${aiChoice}`);
                    markSquare.innerHTML = 'X';
                    currentSymbol = player1.symbol;
                    didWin = winCheck();
                    if(didWin == true){
                        currentSymbol = player1.symbol;
                        return;
                    }

                    aiChoice = "";
                    }
                }
            }
            }
            /*if((gameBoard[0]  === 'O' && gameBoard[1]  === 'O' && gameBoard[2] === 'O') || (gameBoard[3]  === 'O' && gameBoard[4]  === 'O' && gameBoard[5] === 'O') ||
            (gameBoard[6]  === 'O' && gameBoard[7]  === 'O' && gameBoard[8] === 'O') || (gameBoard[0]  === 'O' && gameBoard[3]  === 'O' && gameBoard[6] === 'O') 
            ||(gameBoard[1]  === 'O' && gameBoard[4]  === 'O' && gameBoard[7] === 'O') ||(gameBoard[2]  === 'O' && gameBoard[5]  === 'O' && gameBoard[8] === 'O') ||
            (gameBoard[0]  === 'O' && gameBoard[4]  === 'O' && gameBoard[8] === 'O') ||(gameBoard[2]  === 'O' && gameBoard[4]  === 'O' && gameBoard[6] === 'O')) {
                alert("Player 1 Wins");
                gameOver(squares);
                
            }
            else if((gameBoard[0]  === 'X' && gameBoard[1]  === 'X' && gameBoard[2] === 'X') || (gameBoard[3]  === 'X' && gameBoard[4]  === 'X' && gameBoard[5] === 'X') ||
            (gameBoard[6]  === 'X' && gameBoard[7]  === 'X' && gameBoard[8] === 'X') || (gameBoard[0]  === 'X' && gameBoard[3]  === 'X' && gameBoard[6] === 'X') 
            ||(gameBoard[1]  === 'X' && gameBoard[4]  === 'X' && gameBoard[7] === 'X') ||(gameBoard[2]  === 'X' && gameBoard[5]  === 'X' && gameBoard[8] === 'X') ||
            (gameBoard[0]  === 'X' && gameBoard[4]  === 'X' && gameBoard[8] === 'X') ||(gameBoard[2]  === 'X' && gameBoard[4]  === 'X' && gameBoard[6] === 'X')) {
                console.log("Player 2 Wins");
                gameOver(squares);
            }

            else if(gameBoard[0] && gameBoard[1] && gameBoard[2] && gameBoard[3] && gameBoard[4] && gameBoard[5] && gameBoard[6] && gameBoard[7] && gameBoard[8]) {
                alert("The game is a tie");
                gameOver(squares);
            }*/
        });
          
            
    });

})();

function winCheck() {
    if((gameBoard[0]  === 'O' && gameBoard[1]  === 'O' && gameBoard[2] === 'O') || (gameBoard[3]  === 'O' && gameBoard[4]  === 'O' && gameBoard[5] === 'O') ||
            (gameBoard[6]  === 'O' && gameBoard[7]  === 'O' && gameBoard[8] === 'O') || (gameBoard[0]  === 'O' && gameBoard[3]  === 'O' && gameBoard[6] === 'O') 
            ||(gameBoard[1]  === 'O' && gameBoard[4]  === 'O' && gameBoard[7] === 'O') ||(gameBoard[2]  === 'O' && gameBoard[5]  === 'O' && gameBoard[8] === 'O') ||
            (gameBoard[0]  === 'O' && gameBoard[4]  === 'O' && gameBoard[8] === 'O') ||(gameBoard[2]  === 'O' && gameBoard[4]  === 'O' && gameBoard[6] === 'O')) {
                alert(`${player1.name} Wins`);
                console.log("player 1 Wins");
                gameOver();
                return true;
                
            }
            else if((gameBoard[0]  === 'X' && gameBoard[1]  === 'X' && gameBoard[2] === 'X') || (gameBoard[3]  === 'X' && gameBoard[4]  === 'X' && gameBoard[5] === 'X') ||
            (gameBoard[6]  === 'X' && gameBoard[7]  === 'X' && gameBoard[8] === 'X') || (gameBoard[0]  === 'X' && gameBoard[3]  === 'X' && gameBoard[6] === 'X') 
            ||(gameBoard[1]  === 'X' && gameBoard[4]  === 'X' && gameBoard[7] === 'X') ||(gameBoard[2]  === 'X' && gameBoard[5]  === 'X' && gameBoard[8] === 'X') ||
            (gameBoard[0]  === 'X' && gameBoard[4]  === 'X' && gameBoard[8] === 'X') ||(gameBoard[2]  === 'X' && gameBoard[4]  === 'X' && gameBoard[6] === 'X')) {
                if(player2.type == 'AI')
                {
                    alert("The AI wins");
                }
                else
                alert(`${player2.name} Wins`);
                
                console.log("Player 2 Wins");
                gameOver();
                return true
            }

            else if(gameBoard[0] && gameBoard[1] && gameBoard[2] && gameBoard[3] && gameBoard[4] && gameBoard[5] && gameBoard[6] && gameBoard[7] && gameBoard[8]) {
                alert("The game is a tie");
                console.log("The game is a tie");
                gameOver(); return true;
            }
            else return false;
}

function gameOver() {
    let gameContainer = document.querySelector('#gameBoard');
    const squares = document.querySelectorAll('.square')

    setTimeout(function(){
        squares.forEach((square) => {
            gameContainer.style.display = "none"


        });
    }, 1);

}

let aiMode = (() => {
    let aiBtn = document.querySelector('.aiMode');
    let twoPlayersBtn = document.querySelector('.twoPlayers');
    let player1Name = document.querySelector('#player1');
    let submit = document.querySelector('.submit');
    let start = document.querySelector('.startBtn');
    let names = document.querySelector('#names');
    
    aiBtn.addEventListener('click', () => {
        player2.type = 'AI';
        aiBtn.style.display = "none";
        twoPlayersBtn.style.display = "none";
        player1Name.style.display = "inline";
        submit.style.display = "inline";
        names.style.display = "flex";

        //start.style.display = 'inline'


    });
})();

let humanMode = (() => {
    let aiBtn = document.querySelector('.aiMode');
    let twoPlayersBtn = document.querySelector('.twoPlayers');
    let start = document.querySelector('.startBtn');
    let player1Name = document.querySelector('#player1');
    let player2Name = document.querySelector('#player2');
    let submit = document.querySelector('.submit');
    let names = document.querySelector('#names');
    
    twoPlayersBtn.addEventListener('click', () => {
        player2.type = '';
        aiBtn.style.display = "none";
        twoPlayersBtn.style.display = "none";
        player1Name.style.display = "inline";
        player2Name.style.display = "inline";
        submit.style.display = "inline";
        names.style.display = "flex";
        //start.style.display = 'inline'

    });
})();

const setName = (()=> {
    let start = document.querySelector('.startBtn');
    let player1Name = document.querySelector('#player1');
    let player2Name = document.querySelector('#player2');
    let submit = document.querySelector('.submit');
    let names = document.querySelector('#names');

    submit.addEventListener('click', () => {
        player1.name = player1Name.value;
        player2.name = player2Name.value;
        player1Name.style.display = "none";
        player2Name.style.display = "none";
        submit.style.display = "none";
        names.style.display = "none";
        start.style.display = 'inline';
        player1Name.value = "";
        player2Name.value = "";

    });
})();