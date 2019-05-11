var u = require('./Utility');
var w = require('util');
var rl = require('readline-sync');

/*
 * @Aim: Tic tac toe game
 * @Auther: Rushikesh Chopade
 * @verison: 1.0.0
 * @since: 25/02/2019
 */

console.log("Welcome to Tic Tac Toe!!!");
check = 0;
play = false;

var game = [[], [], []];

for (let i = 0; i < game.length; i++) {
    for (let j = 0; j < game.length; j++) {
        game[i][j] = '-';
    }
}
u.printBoard(game);
do {
    if (play == true) {
        var m = Math.floor(Math.random() * Math.floor(3));
        var n = Math.floor(Math.random() * Math.floor(3));
        if (game[m][n] == '-') {
            console.log("Computer played..");
            game[m][n] = 'O';
            console.log();
            u.printBoard(game);
            check++;
            play = false;
        }
        if ((game[0][0] == 'O' && game[0][1] == 'O' && game[0][2] == 'O') ||
            (game[1][0] == 'O' && game[1][1] == 'O' && game[1][2] == 'O') ||
            (game[2][0] == 'O' && game[2][1] == 'O' && game[2][2] == 'O') ||
            (game[0][0] == 'O' && game[1][0] == 'O' && game[2][0] == 'O') ||
            (game[0][1] == 'O' && game[1][1] == 'O' && game[2][1] == 'O') ||
            (game[0][2] == 'O' && game[1][2] == 'O' && game[2][2] == 'O') ||
            (game[0][2] == 'O' && game[1][1] == 'O' && game[2][0] == 'O') ||
            (game[0][0] == 'O' && game[1][1] == 'O' && game[2][2] == 'O')) {
            console.log("Computer won...");
            break;
        }
    }
    if (play == false && check < 8) {
        var p = rl.question("It's Your turn...Enter the row(<=2):");
        var q = rl.question("Enter the column(<=2):");
        if (game[p][q] == '-') {
            game[p][q] = 'X';
            console.log();
            u.printBoard(game);
            check++;
            play = true;
        }
        if ((game[0][0] == 'X' && game[0][1] == 'X' && game[0][2] == 'X') ||
            (game[1][0] == 'X' && game[1][1] == 'X' && game[1][2] == 'X') ||
            (game[2][0] == 'X' && game[2][1] == 'X' && game[2][2] == 'X') ||
            (game[0][0] == 'X' && game[1][0] == 'X' && game[2][0] == 'X') ||
            (game[0][1] == 'X' && game[1][1] == 'X' && game[2][1] == 'X') ||
            (game[0][2] == 'X' && game[1][2] == 'X' && game[2][2] == 'X') ||
            (game[0][2] == 'X' && game[1][1] == 'X' && game[2][0] == 'X') ||
            (game[0][0] == 'X' && game[1][1] == 'X' && game[2][2] == 'X')) {
            console.log("Yay!! You won...");
            break;
        }
    }
} while (check != 9);
if (check == 9) {
    console.log("...Game Draw...");
}
