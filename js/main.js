console.log('TIC TAC TOE v1');

let player1El = document.querySelector('#player1');
let player2El = document.querySelector('#player2');

let player1ItemEl = document.querySelector('#player1 .item');
let player1NameEl = document.querySelector('#player1 .name');
let player1ScoreEl = document.querySelector('#player1 .score');

let player2ItemEl = document.querySelector('#player2 .item');
let player2NameEl = document.querySelector('#player2 .name');
let player2ScoreEl = document.querySelector('#player2 .score');

let listColEl = document.querySelectorAll('.col');
let cola1El = document.querySelector('.a1');
let colb1El = document.querySelector('.b1');
let colc1El = document.querySelector('.c1');
let cola2El = document.querySelector('.a2');
let colb2El = document.querySelector('.b2');
let colc2El = document.querySelector('.c2');
let cola3El = document.querySelector('.a3');
let colb3El = document.querySelector('.b3');
let colc3El = document.querySelector('.c3');

let msgEl = document.querySelector('#msg');
let gridEl = document.querySelector('.grid');

let currentPlayer = 0;
let PlayersItems = ['X', 'O'];
let PlayersScores = [
    isNaN(parseInt(localStorage.getItem('player1Score'))) ? 0 : parseInt(localStorage.getItem('player1Score')), 
    isNaN(parseInt(localStorage.getItem('player2Score'))) ? 0 : parseInt(localStorage.getItem('player2Score'))
];
let win = false;

console.log(PlayersScores);

player1ItemEl.innerHTML = PlayersItems[0];
player1ScoreEl.innerHTML = PlayersScores[0];
player1NameEl.innerHTML = 'Player1';

player2ItemEl.innerHTML = PlayersItems[1];
player2ScoreEl.innerHTML = PlayersScores[1];
player2NameEl.innerHTML = 'Player2';

const verif = () => {
    if (
        cola1El.innerHTML == PlayersItems[currentPlayer] &&
        colb1El.innerHTML == PlayersItems[currentPlayer] &&
        colc1El.innerHTML == PlayersItems[currentPlayer]
    ) {
        return true;
    }

    if (
        cola2El.innerHTML == PlayersItems[currentPlayer] &&
        colb2El.innerHTML == PlayersItems[currentPlayer] &&
        colc2El.innerHTML == PlayersItems[currentPlayer]
    ) {
        return true;
    }

    if (
        cola3El.innerHTML == PlayersItems[currentPlayer] &&
        colb3El.innerHTML == PlayersItems[currentPlayer] &&
        colc3El.innerHTML == PlayersItems[currentPlayer]
    ) {
        return true;
    }

    if (
        cola1El.innerHTML == PlayersItems[currentPlayer] &&
        cola2El.innerHTML == PlayersItems[currentPlayer] &&
        cola3El.innerHTML == PlayersItems[currentPlayer]
    ) {
        return true;
    }

    if (
        colb1El.innerHTML == PlayersItems[currentPlayer] &&
        colb2El.innerHTML == PlayersItems[currentPlayer] &&
        colb3El.innerHTML == PlayersItems[currentPlayer]
    ) {
        return true;
    }

    if (
        colc1El.innerHTML == PlayersItems[currentPlayer] &&
        colc2El.innerHTML == PlayersItems[currentPlayer] &&
        colc3El.innerHTML == PlayersItems[currentPlayer]
    ) {
        return true;
    }

    if (
        cola1El.innerHTML == PlayersItems[currentPlayer] &&
        colb2El.innerHTML == PlayersItems[currentPlayer] &&
        colc3El.innerHTML == PlayersItems[currentPlayer]
    ) {
        return true;
    }

    if (
        colc1El.innerHTML == PlayersItems[currentPlayer] &&
        colb2El.innerHTML == PlayersItems[currentPlayer] &&
        cola3El.innerHTML == PlayersItems[currentPlayer]
    ) {
        return true;
    }

    return false;
};

listColEl.forEach(colEl => {
    colEl.addEventListener('click', (event) => {
        console.log("click !", event.target.innerHTML);
        msgEl.innerHTML = "";
        msgEl.classList.remove('danger');
        msgEl.classList.remove('success');

        if (!win) {
            if (event.target.innerHTML == "") {
                if (currentPlayer == 0) {
                    event.target.innerHTML = player1ItemEl.innerHTML;
                } else {
                    event.target.innerHTML = player2ItemEl.innerHTML;
                }
                
                win = verif();
                
                if (win) {
                    msgEl.innerHTML = "Player" + (currentPlayer+1) + " gagne !";
                    msgEl.classList.add('success');

                    PlayersScores[currentPlayer] ++;
                    player1ScoreEl.innerHTML = PlayersScores[0];
                    player2ScoreEl.innerHTML = PlayersScores[1];

                    localStorage.setItem('player1Score', PlayersScores[0]);
                    localStorage.setItem('player2Score', PlayersScores[1]);
                } else {
                    if (currentPlayer == 0) {
                        currentPlayer = 1;
                    } else {
                        currentPlayer = 0;
                    }
                }
            } else {
                msgEl.innerHTML = "Vous ne pouvez pas jouer ici !";
                msgEl.classList.add('danger');
            }
        } else {
            msgEl.innerHTML = "Partie terminer !";
            msgEl.classList.add('danger');
        }
    })
});