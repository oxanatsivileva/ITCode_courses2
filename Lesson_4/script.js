let table = document.querySelector('#table');
let cells =  document.querySelectorAll('.cell');
let results = document.querySelector('#results');
let again = document.querySelector('#again');
let player = "X";
let gameOver = false;
let isDraw = false;
let winPos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

cells.forEach( e => {
    e.innerHTML = "";
    e.addEventListener('click', () => {
        if(!gameOver && e.innerHTML === "") {
            e.innerHTML = player;
            win();
            draw();
            changePlayer();
        }
    })
})

function changePlayer() {
    if(player === "X") {
        player = "O";
    } else {
        player = "X";
    }
}

function win() {
    for (let i = 0; i < winPos.length; i++) {
        let value1 = cells[winPos[i][0]].innerHTML;
        let value2 = cells[winPos[i][1]].innerHTML;
        let value3 = cells[winPos[i][2]].innerHTML;

        if(value1 != "" && value1 === value2 && value1 === value3) {
            gameOver = true;  
            results.innerHTML = "Выиграл " + player;

            for(j = 0; j < 3; j++) {
                cells[winPos[i][j]].style.backgroundColor = 'red';
            }
        } 
    }
};

function draw() {
    if(!gameOver) {
        isDraw = true;
        cells.forEach(e => {
            if(e.innerHTML === "") isDraw = false;
        })
    }

    if(isDraw) {
        gameOver = true;
        results.innerHTML = "Ничья";
    }
};

again.addEventListener('click',()=>{
    document.location.reload()
})