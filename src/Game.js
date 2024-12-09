
// Randomly selects a gameOfTheDay
export function gameOfTheDay() {
    return Math.floor(Math.random() * 4);
}

// Randomly selects of timeOfTheDay
export function timeOfTheDay() {
    return Math.floor(Math.random() * 24);
}

// Updates the guessed time.
export function timeGuessUpdate(value) {
    setTimeGuessString(value);
    switch(value) {
    case "12AM":
        setTimeGuess(1)
        break;
    case "1AM":
        setTimeGuess(2)
        break;
    case "2AM":
        setTimeGuess(3)
        break;
    case "3AM":
        setTimeGuess(4)
        break;
    case "4AM":
        setTimeGuess(5)
        break;
    case "5AM":
        setTimeGuess(6)
        break;
    case "6AM":
        setTimeGuess(7)
        break;
    case "7AM":
        setTimeGuess(8)
        break;
    case "8AM":
        setTimeGuess(9)
        break;
    case "9AM":
        setTimeGuess(10)
        break;
    case "10AM":
        setTimeGuess(11)
        break;
    case "11AM":
        setTimeGuess(12)
        break;
    case "12AM":
        setTimeGuess(13)
        break;
    case "1PM":
        setTimeGuess(14)
        break;
    case "2PM":
        setTimeGuess(15)
        break;
    case "3PM":
        setTimeGuess(16)
        break;
    case "4PM":
        setTimeGuess(17)
        break;
    case "5PM":
        setTimeGuess(18)
        break;
    case "6PM":
        setTimeGuess(19)
        break;
    case "7PM":
        setTimeGuess(20)
        break;
    case "8PM":
        setTimeGuess(21)
        break;
    case "9PM":
        setTimeGuess(22)
        break;
    case "10PM":
        setTimeGuess(23)
        break;
    case "11PM":
        setTimeGuess(24)
        break;
    }
}

// Updates the guessed game.
export function gameGuessUpdate(value) {
    setGameGuessString(value);
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
export function submit() {
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
export function play() {
    let song =  new Audio(songList[gameAnswerIndex][timeAnswerIndex]);
    if (answerSubmitted) {
        if (guessCount == 1) {
            song.play();
            delay(3000).then(() => {
            song.pause();
            });
        }

        if (guessCount == 2) {
            song.play();
            delay(5000).then(() => {
                song.pause();
            });
        }

        if (guessCount == 3) {
            song.play();
            delay(8000).then(() => {
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
}
    




