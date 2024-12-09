// Contains the path for each mp3.
let songList = [
    ["/GC12AM.mp3", "/GC1AM.mp3", "/GC2AM.mp3", "/GC3AM.mp3", "/GC4AM.mp3", "/GC5AM.mp3", "/GC6AM.mp3", "/GC7AM.mp3", "/GC8AM.mp3", "/GC9AM.mp3", "/GC10AM.mp3", "/GC11AM.mp3", "/GC12PM.mp3", "/GC1PM.mp3", "/GC2PM.mp3", "/GC3PM.mp3", "/GC4PM.mp3", "/GC5PM.mp3", "/GC6PM.mp3", "/GC7PM.mp3", "/GC8PM.mp3", "/GC9PM.mp3", "/GC10PM.mp3", "/GC11PM.mp3"],
    ["/CF12AM.mp3", "/CF1AM.mp3", "/CF2AM.mp3", "/CF3AM.mp3", "/CF4AM.mp3", "/CF5AM.mp3", "/CF6AM.mp3", "/CF7AM.mp3", "/CF8AM.mp3", "/CF9AM.mp3", "/CF10AM.mp3", "/CF11AM.mp3", "/CF12PM.mp3", "/CF1PM.mp3", "/CF2PM.mp3", "/CF3PM.mp3", "/CF4PM.mp3", "/CF5PM.mp3", "/CF6PM.mp3", "/CF7PM.mp3", "/CF8PM.mp3", "/CF9PM.mp3", "/CF10PM.mp3", "/CF11PM.mp3"],
    ["/NL12AM.mp3", "/NL1AM.mp3", "/NL2AM.mp3", "/NL3AM.mp3", "/NL4AM.mp3", "/NL5AM.mp3", "/NL6AM.mp3", "/NL7AM.mp3", "/NL8AM.mp3", "/NL9AM.mp3", "/NL10AM.mp3", "/NL11AM.mp3", "/NL12PM.mp3", "/NL1PM.mp3", "/NL2MP.mp3", "/NL3PM.mp3", "/NL4PM.mp3", "/NL5PM.mp3", "/NL6PM.mp3", "/NL7PM.mp3", "/NL8PM.mp3", "/NL9PM.mp3", "/NL10PM.mp3", "/NL11PM.mp3"],
    ["/NH12AM.mp3", "/NH1AM.mp3", "/NH2AM.mp3", "/NH3AM.mp3", "/NH4AM.mp3", "/NH5AM.mp3", "/NH6AM.mp3", "/NH7AM.mp3", "/NH8AM.mp3", "/NH9AM.mp3", "/NH10AM.mp3", "/NH11AM.mp3", "/NH12PM.mp3", "/NH1PM.mp3", "/NH2PM.mp3", "/NH3PM.mp3", "/NH4PM.mp3", "/NH5PM.mp3", "/NH6PM.mp3", "/NH7PM.mp3", "/NH8PM.mp3", "/NH9PM.mp3", "/NH10PM.mp3", "/NH11PM.mp3"]
];

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
export function timeGuessUpdate(value, setTimeGuess, setTimeGuessString) {
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
export function gameGuessUpdate(value, setGameGuess, setGameGuessString) {
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
export function play(answerSubmitted, guessCount, gameAnswerIndex, timeAnswerIndex) {
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
    




