function wordBoggle(board, words) {

let foundWords = new Set();
for (let word of words) {
    const startingLetters = init(word);
    if (startingLetters.length > 0) {
    for (let startingLetter of startingLetters) {
        const string = scan(startingLetter, word);
        // console.log("String: ", string);
        if (string === word) {
            foundWords.add(word);
            break;
        }
    }    
    }
    
}

return [...foundWords].sort((a, b) => a.localeCompare(b));

function init(word) {
    let startingLetters = [], letter = word[0];
    for (let row in board) {
        for (let char in board[row]) {
            if (board[row][char] === letter) {
                startingLetters.push([row, char])
            }
        }
    }
    return startingLetters;
}


function scan(startingLetter, word) {
    startingLetter[0] = parseInt(startingLetter[0]);
    startingLetter[1] = parseInt(startingLetter[1]);

    let i = 1,
        string = word[0],
        checked = [startingLetter],
        boardClone = board.map((row) => row.slice()),
        area = [startingLetter[0] - 1, startingLetter[0] + 2, startingLetter[1] - 1, startingLetter[1] + 2];

    boardClone[startingLetter[0]][startingLetter[1]] = "--";

    while (checked.length > 0 && checked.length < word.length) {
        i = parseInt(i);
        let found = false;
        rowLoop:
            for (let n = area[0]; n < area[1]; n++) {
                for (let x = area[2]; x < area[3]; x++) {
                    if (word[i] && boardClone[n] && boardClone[n][x] && boardClone[n][x].toLowerCase() === word[i].toLowerCase()) {
                        boardClone[n][x] = "--";
                        checked.push([n, x]);
                        area = [n - 1, n + 2, x - 1, x + 2];
                        string += word[i];
                        found = true;
                        i++;
                        break rowLoop;
                    }
                }
            }

        if (!found) {
            checked.pop();
            string = string.substring(0, string.length - 1);
            if (checked[checked.length - 1]) {
                const c = checked[checked.length - 1];
                area = [c[0] - 1, c[0] + 2, c[1] - 1, c[1] + 2];
                i--;
            }
        }

        // console.log(checked);
    }

    return string;
}



}
