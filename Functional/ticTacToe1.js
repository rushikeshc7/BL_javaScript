var u = require('./Utility');
var w = require('util');
var rl = require('readline-sync');

/*
 * @Aim: Tic tac toe game
 * @Auther: Rushikesh Chopade
 * @verison: 1.0.0
 * @since: 28/02/2019
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
        var p = rl.question("It's Your turn...Enter the row(<=2):");
        var q = rl.question("Enter the column(<=2):");
        if (game[p][q] == '-') {
            game[p][q] = 'X';
            console.log();
            u.printBoard(game);
            check++;
            play = false;
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
            
        }
    }

    if (play == false && check < 10) {

    do{
        var m = Math.floor(Math.random() * 3);
        var n = Math.floor(Math.random() * 3);
            if (game[0][0] == 'X' && game[1][0] == 'X' && game[2][0] == '-') {
                game[2][0] = 'O';
                play = true;
            }

            else if (game[1][0] == 'X' && game[2][0] == 'X' && game[0][0] == '-') {
                game[0][0] = 'O';
                play = true;
            }
            else if (game[0][1] == 'X' && game[1][1] == 'X' && game[2][1] == '-') {
                game[2][1] = 'O';
                play = true;
            }
            else if (game[1][1] == 'X' && game[2][1] == 'X' && game[0][1] == '-') {

                game[0][1] = 'O';
                play = true;
            }
            else if (game[0][2] == 'X' && game[1][2] == 'X' && game[2][2] == '-') {

                game[2][2] = 'O';
                play = true;
            }
            else if (game[1][2] == 'X' && game[2][2] == 'X'&& game[0][2] == '-') {

                game[0][2] = 'O';
                play = true;
            }
            else if (game[0][0] == 'X' && game[1][1] == 'X' && game[2][2] == '-') {

                game[2][2] = 'O';
                play = true;
            }
            else if (game[2][2] == 'X' && game[1][1] == 'X' && game[0][0] == '-') {

                game[0][0] = 'O';
                play = true;
            }
            else if (game[0][2] == 'X' && game[1][1] == 'X' && game[2][0] == '-') {

                game[2][0] = 'O';
                play = true;
            }
            else if (game[2][0] == 'X' && game[1][1] == 'X' && game[0][2] == '-') {

                game[0][2] = 'O';
                play = true;
            }
            else if (game[0][0] == 'X' && game[0][1] == 'X' && game[0][2] == '-') {

                game[0][2] = 'O';
                play = true;
            }
            else if (game[0][1] == 'X' && game[0][2] == 'X' && game[0][0] == '-') {

                game[0][0] = 'O';
                play = true;
            }
            else if (game[1][0] == 'X' && game[1][1] == 'X' && game[1][2] == '-') {

                game[1][2] = 'O';
                play = true;
            }
            else if (game[1][1] == 'X' && game[1][2] == 'X' && game[1][0] == '-' ) {

                game[1][0] = 'O';
                play = true;
            }
            else if (game[2][0] == 'X' && game[2][1] == 'X' && game[2][2] == '-') {

                game[2][2] = 'O';
                play = true;
            }
            else if (game[2][1] == 'X' && game[2][2] == 'X' && game[2][0] == '-') {

                game[2][0] = 'O';
                play = true;
            }

            else if (game[1][0] == 'X' && game[1][2] == 'X' && game[1][1] == '-') {

                game[1][1] = 'O';
                play = true;
            }

            else if (game[0][0] == 'X' && game[0][2] == 'X' && game[0][1] == '-') {

                game[0][1] = 'O';
                play = true;
            }

            else if (game[2][0] == 'X' && game[2][2] == 'X' && game[2][1] == '-') {

                game[2][1] = 'O';
                play = true;
            }

            else if (game[0][0] == 'X' && game[2][0] == 'X' && game[1][0] == '-') {

                game[1][0] = 'O';
                play = true;
            }
            else if (game[0][1] == 'X' && game[2][1] == 'X' && game[1][1] == '-') {

                game[1][1] = 'O';
                play = true;
            }

            else if (game[0][2] == 'X' && game[2][2] == 'X' && game[1][2] == '-') {

                game[1][2] = 'O';
                play = true;
            }

            else if (game[0][0] == 'X' && game[2][2] == 'X' && game[1][1] == '-') {

                game[1][1] = 'O';
                play = true;
            }

            else if (game[0][2] == 'X' && game[2][0] == 'X' && game[1][1] == '-') {

                game[1][1] = 'O';
                play = true;
            }

            else if (game[m][n] == '-' && game[m][n] !== 'X' && game[m][n] !== 'O'){
                game[m][n] = 'O';
                play = true;
            }
        }while(play == false) 
                
            console.log();
            u.printBoard(game);
            check++;
            console.log("Computer played..");
            // play = true;

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
            
        }
    }while (check != 9);


if (check < 10) {
    console.log("...Game Draw...");
}
