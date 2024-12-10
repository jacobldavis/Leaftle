// Contains the names of each song for display.
let songNames = [
    ["Animal Crossing GameCube 12AM", "Animal Crossing GameCube 1AM", "Animal Crossing GameCube 2AM", "Animal Crossing GameCube 3AM", "Animal Crossing GameCube 4AM", "Animal Crossing GameCube 5AM", "Animal Crossing GameCube 6AM", "Animal Crossing GameCube 7AM", "Animal Crossing GameCube 8AM", "Animal Crossing GameCube 9AM", "Animal Crossing GameCube 10AM", "Animal Crossing GameCube 11AM", "Animal Crossing GameCube 12PM", "Animal Crossing GameCube 1PM", "Animal Crossing GameCube 2PM", "Animal Crossing GameCube 3PM", "Animal Crossing GameCube 4PM", "Animal Crossing GameCube 5PM", "Animal Crossing GameCube 6PM", "Animal Crossing GameCube 7PM", "Animal Crossing GameCube 8PM", "Animal Crossing GameCube 9PM", "Animal Crossing GameCube 10PM", "Animal Crossing GameCube 11PM"],
    ["Animal Crossing City Folk and Wild World 12AM", "Animal Crossing City Folk and Wild World 1AM", "Animal Crossing City Folk and Wild World 2AM", "Animal Crossing City Folk and Wild World 3AM", "Animal Crossing City Folk and Wild World 4AM", "Animal Crossing City Folk and Wild World 5AM", "Animal Crossing City Folk and Wild World 6AM", "Animal Crossing City Folk and Wild World 7AM", "Animal Crossing City Folk and Wild World 8AM", "Animal Crossing City Folk and Wild World 9AM", "Animal Crossing City Folk and Wild World 10AM", "Animal Crossing City Folk and Wild World 11AM", "Animal Crossing City Folk and Wild World 12PM", "Animal Crossing City Folk and Wild World 1PM", "Animal Crossing City Folk and Wild World 2PM", "Animal Crossing City Folk and Wild World 3PM", "Animal Crossing City Folk and Wild World 4PM", "Animal Crossing City Folk and Wild World 5PM", "Animal Crossing City Folk and Wild World 6PM", "Animal Crossing City Folk and Wild World 7PM", "Animal Crossing City Folk and Wild World 8PM", "Animal Crossing City Folk and Wild World 9PM", "Animal Crossing City Folk and Wild World 10PM", "Animal Crossing City Folk and Wild World 11PM"],
    ["Animal Crossing New Leaf 12AM", "Animal Crossing New Leaf 1AM", "Animal Crossing New Leaf 2AM", "Animal Crossing New Leaf 3AM", "Animal Crossing New Leaf 4AM", "Animal Crossing New Leaf 5AM", "Animal Crossing New Leaf 6AM", "Animal Crossing New Leaf 7AM", "Animal Crossing New Leaf 8AM", "Animal Crossing New Leaf 9AM", "Animal Crossing New Leaf 10AM", "Animal Crossing New Leaf 11AM", "Animal Crossing New Leaf 12PM", "Animal Crossing New Leaf 1PM", "Animal Crossing New Leaf 2PM", "Animal Crossing New Leaf 3PM", "Animal Crossing New Leaf 4PM", "Animal Crossing New Leaf 5PM", "Animal Crossing New Leaf 6PM", "Animal Crossing New Leaf 7PM", "Animal Crossing New Leaf 8PM", "Animal Crossing New Leaf 9PM", "Animal Crossing New Leaf 10PM", "Animal Crossing New Leaf 11PM"],
    ["Animal Crossing New Horizons 12AM", "Animal Crossing New Horizons 1AM", "Animal Crossing New Horizons 2AM", "Animal Crossing New Horizons 3AM", "Animal Crossing New Horizons 4AM", "Animal Crossing New Horizons 5AM", "Animal Crossing New Horizons 6AM", "Animal Crossing New Horizons 7AM", "Animal Crossing New Horizons 8AM", "Animal Crossing New Horizons 9AM", "Animal Crossing New Horizons 10AM", "Animal Crossing New Horizons 11AM", "Animal Crossing New Horizons 12PM", "Animal Crossing New Horizons 1PM", "Animal Crossing New Horizons 2PM", "Animal Crossing New Horizons 3PM", "Animal Crossing New Horizons 4PM", "Animal Crossing New Horizons 5PM", "Animal Crossing New Horizons 6PM", "Animal Crossing New Horizons 7PM", "Animal Crossing New Horizons 8PM", "Animal Crossing New Horizons 9PM", "Animal Crossing New Horizons 10PM", "Animal Crossing New Horizons 11PM"]
];

// Randomly selects a gameOfTheDay
export function gameOfTheDay() {
    return Math.floor(Math.random() * 4);
}

// Randomly selects of timeOfTheDay
export function timeOfTheDay() {
    return Math.floor(Math.random() * 24);
}

// Updates the guessed time.
export function timeGuessUpdate(value, setTimeGuess) {
        if (value === "12AM") {
          setTimeGuess(1);
        } else if (value === "1AM") {
          setTimeGuess(2);
        } else if (value === "2AM") {
          setTimeGuess(3);
        } else if (value === "3AM") {
          setTimeGuess(4);
        } else if (value === "4AM") {
          setTimeGuess(5);
        } else if (value === "5AM") {
          setTimeGuess(6);
        } else if (value === "6AM") {
          setTimeGuess(7);
        } else if (value === "7AM") {
          setTimeGuess(8);
        } else if (value === "8AM") {
          setTimeGuess(9);
        } else if (value === "9AM") {
          setTimeGuess(10);
        } else if (value === "10AM") {
          setTimeGuess(11);
        } else if (value === "11AM") {
          setTimeGuess(12);
        } else if (value === "12PM") {
          setTimeGuess(13);
        } else if (value === "1PM") {
          setTimeGuess(14);
        } else if (value === "2PM") {
          setTimeGuess(15);
        } else if (value === "3PM") {
          setTimeGuess(16);
        } else if (value === "4PM") {
          setTimeGuess(17);
        } else if (value === "5PM") {
          setTimeGuess(18);
        } else if (value === "6PM") {
          setTimeGuess(19);
        } else if (value === "7PM") {
          setTimeGuess(20);
        } else if (value === "8PM") {
          setTimeGuess(21);
        } else if (value === "9PM") {
          setTimeGuess(22);
        } else if (value === "10PM") {
          setTimeGuess(23);
        } else {
          setTimeGuess(24);
        }
}

// Updates the guessed game.
export function gameGuessUpdate(value, setGameGuess) {
    if (value === "Animal Crossing GameCube") {
        setGameGuess(1);
    } else if (value === "Animal Crossing City Folk and Wild World") {
        setGameGuess(2);
    } else if (value === "Animal Crossing New Leaf") {
        setGameGuess(3);
    } else {
        setGameGuess(4);
    }
}

// Tests whether a selected song and game match the answer.
export function submit(timeGuess, gameGuess, timeAnswer, gameAnswer, setGuessCount, setAnswerSubmitted, setResult1, setResult2, setResult3, setResult4, setTotalAnswer, guessCount, gameAnswerIndex, timeAnswerIndex) { 
    if(timeGuess != "" && gameGuess != "") {
        setGuessCount(guessCount + 1);
        setAnswerSubmitted(true);
        if(guessCount == 1) {
            if (timeGuess == timeAnswer && gameGuess == gameAnswer) {
                setResult1("You Win!");
            } else {
                setResult1(songNames[gameGuess - 1][timeGuess - 1]);
            }
        }

        if(guessCount == 2) {
            if (timeGuess == timeAnswer && gameGuess == gameAnswer) {
                setResult2("You Win!");
            } else {
                setResult2(songNames[gameGuess - 1][timeGuess - 1]);
            }
        }

        if(guessCount == 3) {
            if (timeGuess == timeAnswer && gameGuess == gameAnswer) {
                setResult3("You Win!");
            } else {
                setResult3(songNames[gameGuess - 1][timeGuess - 1]);
            }
        }

        if(guessCount == 4) {
            if (timeGuess == timeAnswer && gameGuess == gameAnswer) {
                setResult4("You Win!");
            } else {
                setResult4("You Lost! Correct Answer: ");
                setTotalAnswer(songNames[gameAnswerIndex][timeAnswerIndex]);
            }
        }
    }
}

// Pauses the song after a delay.
export async function delay(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

// Plays the song.
export function play(guessCount, gameAnswerIndex, timeAnswerIndex, songList) {
    let song =  new Audio(songList[gameAnswerIndex][timeAnswerIndex]);
    if (guessCount == 1) {
        song.play();
        delay(3000).then(() => {
            song.pause();
        });
    }

    if (guessCount == 2) {
        song.play();
        delay(6000).then(() => {
            song.pause();  
        });
    }

    if (guessCount == 3) {
        song.play();
        delay(9000).then(() => {
            song.pause();
        });
    }

    if (guessCount == 4) {
        song.play();
        delay(12000).then(() => {
            song.pause();
        });
    }
}
    




