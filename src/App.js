import './App.css';
import React from "react";
import { gameOfTheDay, timeOfTheDay, timeGuessUpdate, gameGuessUpdate, submit, play} from './Game.js';
import { Input } from 'semantic-ui-react';
import { useState } from 'react';

// Contains the path for each mp3.
let songList = [
  ["/GC12AM.mp3", "/GC1AM.mp3", "/GC2AM.mp3", "/GC3AM.mp3", "/GC4AM.mp3", "/GC5AM.mp3", "/GC6AM.mp3", "/GC7AM.mp3", "/GC8AM.mp3", "/GC9AM.mp3", "/GC10AM.mp3", "/GC11AM.mp3", "/GC12PM.mp3", "/GC1PM.mp3", "/GC2PM.mp3", "/GC3PM.mp3", "/GC4PM.mp3", "/GC5PM.mp3", "/GC6PM.mp3", "/GC7PM.mp3", "/GC8PM.mp3", "/GC9PM.mp3", "/GC10PM.mp3", "/GC11PM.mp3"],
  ["/CF12AM.mp3", "/CF1AM.mp3", "/CF2AM.mp3", "/CF3AM.mp3", "/CF4AM.mp3", "/CF5AM.mp3", "/CF6AM.mp3", "/CF7AM.mp3", "/CF8AM.mp3", "/CF9AM.mp3", "/CF10AM.mp3", "/CF11AM.mp3", "/CF12PM.mp3", "/CF1PM.mp3", "/CF2PM.mp3", "/CF3PM.mp3", "/CF4PM.mp3", "/CF5PM.mp3", "/CF6PM.mp3", "/CF7PM.mp3", "/CF8PM.mp3", "/CF9PM.mp3", "/CF10PM.mp3", "/CF11PM.mp3"],
  ["/NL12AM.mp3", "/NL1AM.mp3", "/NL2AM.mp3", "/NL3AM.mp3", "/NL4AM.mp3", "/NL5AM.mp3", "/NL6AM.mp3", "/NL7AM.mp3", "/NL8AM.mp3", "/NL9AM.mp3", "/NL10AM.mp3", "/NL11AM.mp3", "/NL12PM.mp3", "/NL1PM.mp3", "/NL2MP.mp3", "/NL3PM.mp3", "/NL4PM.mp3", "/NL5PM.mp3", "/NL6PM.mp3", "/NL7PM.mp3", "/NL8PM.mp3", "/NL9PM.mp3", "/NL10PM.mp3", "/NL11PM.mp3"],
  ["/NH12AM.mp3", "/NH1AM.mp3", "/NH2AM.mp3", "/NH3AM.mp3", "/NH4AM.mp3", "/NH5AM.mp3", "/NH6AM.mp3", "/NH7AM.mp3", "/NH8AM.mp3", "/NH9AM.mp3", "/NH10AM.mp3", "/NH11AM.mp3", "/NH12PM.mp3", "/NH1PM.mp3", "/NH2PM.mp3", "/NH3PM.mp3", "/NH4PM.mp3", "/NH5PM.mp3", "/NH6PM.mp3", "/NH7PM.mp3", "/NH8PM.mp3", "/NH9PM.mp3", "/NH10PM.mp3", "/NH11PM.mp3"]
];

// Sets the random song and game.
const App = () => {
  const [timeAnswerIndex, setTimeAnswerIndex] = useState(timeOfTheDay());
  const [gameAnswerIndex, setGameAnswerIndex] = useState(gameOfTheDay());
  const [timeAnswer, setTimeAnswer] = useState(timeAnswerIndex+1);
  const [gameAnswer, setGameAnswer] = useState(gameAnswerIndex+1);
  const [totalAnswer, setTotalAnswer] = useState();
  const [songPath, setSongPath] = useState(songList[gameAnswerIndex][timeAnswerIndex]);
  const [answerSubmitted, setAnswerSubmitted] = useState(true);

  // Stores the user's guesses and shows if they got the correct song or not.
  const [result1, setResult1] = useState("");
  const [result2, setResult2] = useState("");
  const [result3, setResult3] = useState("");
  const [result4, setResult4] = useState("");

  // Temporarily stores the user's guesses and number of guesses.
  const [timeGuess, setTimeGuess] = useState("");
  const [timeGuessString, setTimeGuessString] = useState("");
  const [gameGuess, setGameGuess] = useState("");
  const [gameGuessString, setGameGuessString] = useState("");
  const [guessCount, setGuessCount] = useState(1);

  const handleTimeGuessUpdate = (value) => {
    timeGuessUpdate(value, setTimeGuess, setTimeGuessString);
  };

  const handleGameGuessUpdate = (value) => {
    gameGuessUpdate(value, setGameGuess, setGameGuessString);
  };

  const handlePlay = () => {
    play(answerSubmitted, guessCount, gameAnswerIndex, timeAnswerIndex);
  };

  // Returns the app to be displayed.
  return (
      <div className="App">
        <header className="Header">
          
          <img src={require("./assets/leaftle2.png")} className="logo"></img>
          
        </header>

      <div className="Body">
        <div className='GuessBox'>
          <img src={require("./assets/leaf.png")} className='GuessBoxLeft'></img>
            <p className="ResultText">{result1}</p>
          <img src={require("./assets/leaf.png")} className='GuessBoxRight'></img>
        </div>
        
        <div className='GuessBox'>
          <img src={require("./assets/leaf.png")} className='GuessBoxLeft'></img>
            <p className="ResultText">{result2}</p>
          <img src={require("./assets/leaf.png")} className='GuessBoxRight'></img>
        </div>

        <div className='GuessBox'>
          <img src={require("./assets/leaf.png")} className='GuessBoxLeft'></img>
            <p className="ResultText">{result3}</p>
          <img src={require("./assets/leaf.png")} className='GuessBoxRight'></img>
        </div>
        
          <div className='GuessBox'>
            <img src={require("./assets/leaf.png")} className='GuessBoxLeft'></img>
              <p className="ResultText">{result4}{totalAnswer}</p>
            <img src={require("./assets/leaf.png")} className='GuessBoxRight'></img>
          </div>
          
        </div>

        <div className="Play">
            <button onClick={handlePlay} className="PlayButton">
              <img className="help"src={require("./assets/leafplayicon.png")}></img>
            </button>
        </div>

        <div className="SongSelection">

          <div>
                <Input onChange={event => handleTimeGuessUpdate(event.target.value)} style={{display: "inline-block"}} className="GuessList" list='times' placeholder='Choose time...' />
                  <datalist id='times'>
                    <option value='12AM'>12AM</option>
                    <option value='1AM'>1AM</option>
                    <option value='2AM'>2AM</option>
                    <option value='3AM'>3AM</option>
                    <option value='4AM'>4AM</option>
                    <option value='5AM'>5AM</option>
                    <option value='6AM'>6AM</option>
                    <option value='7AM'>7AM</option>
                    <option value='8AM'>8AM</option>
                    <option value='9AM'>9AM</option>
                    <option value='10AM'>10AM</option>
                    <option value='11AM'>11AM</option>
                    <option value='12PM'>12PM</option>
                    <option value='1PM'>1PM</option>
                    <option value='2PM'>2PM</option>
                    <option value='3PM'>3PM</option>
                    <option value='4PM'>4PM</option>
                    <option value='5PM'>5PM</option>
                    <option value='6PM'>6PM</option>
                    <option value='7PM'>7PM</option>
                    <option value='8PM'>8PM</option>
                    <option value='9PM'>9PM</option>
                    <option value='10PM'>10PM</option>
                    <option value='11PM'>11PM</option>
                  </datalist>
            <Input onChange={event => handleGameGuessUpdate(event.target.value)} style={{display: "inline-block"}} className="GuessList" list='games' placeholder='Choose game...' ></Input>
                <datalist id='games'>
                  <option value='Animal Crossing GameCube'>Animal Crossing GameCube</option>
                  <option value='Animal Crossing City Folk and Wild World'>Animal Crossing City Folk and Wild World</option>
                  <option value='Animal Crossing New Leaf'>Animal Crossing New Leaf</option>
                  <option value='Animal Crossing New Horizons'>Animal Crossing New Horizons</option>
                </datalist>
            </div>

            <div>

              <button onClick={submit(timeGuess, gameGuess, timeAnswer, gameAnswer, setGuessCount, setAnswerSubmitted, setResult1, setResult2, setResult3, setResult4, setTotalAnswer, guessCount, gameAnswerIndex, timeAnswerIndex)} className="SubmitButton">
                <p>Submit!</p>
              </button>

            </div>

          </div>
        </div>
    );
};

export default App;
