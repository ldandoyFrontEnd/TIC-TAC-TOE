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

let msgEl = document.querySelector('#msg');
let gridEl = document.querySelector('.grid');

let currentPlayer = 1;

player1ItemEl.innerHTML = 'X';
player1ScoreEl.innerHTML = '0';
player1NameEl.innerHTML = 'Player1';

player2ItemEl.innerHTML = 'O';
player2ScoreEl.innerHTML = '0';
player2NameEl.innerHTML = 'Player2';

listColEl.forEach(colEl => {
    colEl.addEventListener('click', (event) => {
        console.log("click !", event.target.innerHTML);
        msgEl.innerHTML = "";
        msgEl.classList.remove('danger');
        msgEl.classList.remove('success');

        if (event.target.innerHTML == "") {
            if (currentPlayer == 1) {
                event.target.innerHTML = player1ItemEl.innerHTML;
                currentPlayer = 2;
            } else {
                event.target.innerHTML = player2ItemEl.innerHTML;
                currentPlayer = 1;
            }
        } else {
            msgEl.innerHTML = "Vous ne pouvez pas jouer ici !";
            msgEl.classList.add('danger');
        }
    })
});