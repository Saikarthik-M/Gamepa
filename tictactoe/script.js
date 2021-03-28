var player1 = prompt("who is X?");
var player2 = prompt("who is O?");
var squ = document.querySelectorAll("td");
var turn = 1;
var instructor = document.getElementById("instr");

for (var j = 0; j < squ.length; j++) {
    squ[j].addEventListener('click', changecontent);
}

function changecontent() {
    if (turn == 1) {
        if (this.innerHTML === "") {
            this.innerHTML = "X";
            winnerchecker();
            turn = 2;
            instructor.innerHTML = player2 + ", it's ur turn";
        }
    }
    else {
        if (this.innerHTML === "") {
            this.innerHTML = "O";
            winnerchecker();
            turn = 1;
            instructor.innerHTML = player1 + ", it's ur turn";
        }
    }

}
// i  =>  0  1  2
//        3  4  5
//        6  7  8
// squ len - 9 -2 = 7


function winnerchecker() {
    for (var i = 0; i < squ.length; i = i + 3) {
        var res = threerow(i, i + 1, i + 2);
        if (res === 1) {
            var gameover = document.getElementById("result");
            if (squ[i].innerHTML === "X") {
                gameover.innerHTML = player1 + " is the winner";
                return;
            }
            else {
                gameover.innerHTML = player2 + " is the winner";
                return;
            }

        }
    }
    for (var i = 0; i < 3; i++) {
        var res = threerow(i, i + 3, i + 6);
        if (res === 1) {
            var gameover = document.getElementById("result");
            if (squ[i].innerHTML === "X") {
                gameover.innerHTML = player1 + " is the winner";
                return;
            }
            else {
                gameover.innerHTML = player2 + " is the winner";
                return;
            }

        }
    }
    var res = threerow(0, 4, 8);
    if (res === 1) {
        var gameover = document.getElementById("result");
        if (squ[i].innerHTML === "X") {
            gameover.innerHTML = player1 + " is the winner";
            return;
        }
        else {
            gameover.innerHTML = player2 + " is the winner";
            return;
        }

    }
    var res = threerow(2, 4, 6);
    if (res === 1) {
        var gameover = document.getElementById("result");
        if (squ[i].innerHTML === "X") {
            gameover.innerHTML = player1 + " is the winner";
            return;
        }
        else {
            gameover.innerHTML = player2 + " is the winner";
            return;
        }

    }
}
function threerow(a, b, c) {
    if (squ[a].innerHTML === "" || squ[b].innerHTML === "" || squ[c].innerHTML === "") {
        return 0;
    }
    if (squ[a].innerHTML === squ[b].innerHTML) {
        if (squ[b].innerHTML === squ[c].innerHTML) {
            clearAll(a, b, c);
            return 1;
        }
        return 0;
    }
    return 0;
}
function clearAll(a, b, c) {
    for (let index = 0; index < squ.length; index++) {
        if (index === a || index === b || index === c) continue;
        squ[index].innerHTML = "";
    }
}