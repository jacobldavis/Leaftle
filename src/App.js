import './App.css';
import React from "react";
import audioFiles from "./audioFiles";
import { gameOfTheDay, timeOfTheDay, timeGuessUpdate, gameGuessUpdate, submit, play} from './Game.js';
import { Input } from 'semantic-ui-react';
import { useState, useEffect, useRef } from 'react';

// Contains the path for each mp3.
let songList = [
  [audioFiles.GC12AM, audioFiles.GC1AM, audioFiles.GC2AM, audioFiles.GC3AM, audioFiles.GC4AM, audioFiles.GC5AM, audioFiles.GC6AM, audioFiles.GC7AM, audioFiles.GC8AM, audioFiles.GC9AM, audioFiles.GC10AM, audioFiles.GC11AM, audioFiles.GC12PM, audioFiles.GC1PM, audioFiles.GC2PM, audioFiles.GC3PM, audioFiles.GC4PM, audioFiles.GC5PM, audioFiles.GC6PM, audioFiles.GC7PM, audioFiles.GC8PM, audioFiles.GC9PM, audioFiles.GC10PM, audioFiles.GC11PM],
  [audioFiles.CF12AM, audioFiles.CF1AM, audioFiles.CF2AM, audioFiles.CF3AM, audioFiles.CF4AM, audioFiles.CF5AM, audioFiles.CF6AM, audioFiles.CF7AM, audioFiles.CF8AM, audioFiles.CF9AM, audioFiles.CF10AM, audioFiles.CF11AM, audioFiles.CF12PM, audioFiles.CF1PM, audioFiles.CF2PM, audioFiles.CF3PM, audioFiles.CF4PM, audioFiles.CF5PM, audioFiles.CF6PM, audioFiles.CF7PM, audioFiles.CF8PM, audioFiles.CF9PM, audioFiles.CF10PM, audioFiles.CF11PM],
  [audioFiles.NL12AM, audioFiles.NL1AM, audioFiles.NL2AM, audioFiles.NL3AM, audioFiles.NL4AM, audioFiles.NL5AM, audioFiles.NL6AM, audioFiles.NL7AM, audioFiles.NL8AM, audioFiles.NL9AM, audioFiles.NL10AM, audioFiles.NL11AM, audioFiles.NL12PM, audioFiles.NL1PM, audioFiles.NL2MP, audioFiles.NL3PM, audioFiles.NL4PM, audioFiles.NL5PM, audioFiles.NL6PM, audioFiles.NL7PM, audioFiles.NL8PM, audioFiles.NL9PM, audioFiles.NL10PM, audioFiles.NL11PM],
  [audioFiles.NH12AM, audioFiles.NH1AM, audioFiles.NH2AM, audioFiles.NH3AM, audioFiles.NH4AM, audioFiles.NH5AM, audioFiles.NH6AM, audioFiles.NH7AM, audioFiles.NH8AM, audioFiles.NH9AM, audioFiles.NH10AM, audioFiles.NH11AM, audioFiles.NH12PM, audioFiles.NH1PM, audioFiles.NH2PM, audioFiles.NH3PM, audioFiles.NH4PM, audioFiles.NH5PM, audioFiles.NH6PM, audioFiles.NH7PM, audioFiles.NH8PM, audioFiles.NH9PM, audioFiles.NH10PM, audioFiles.NH11PM]
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
  const [gameGuess, setGameGuess] = useState("");
  const [guessCount, setGuessCount] = useState(1);

  useEffect(() => {
    setSongPath(songList[gameAnswerIndex][timeAnswerIndex]);
  }, [gameAnswerIndex, timeAnswerIndex]);

  const handleTimeGuessUpdate = (value) => {
    timeGuessUpdate(value, setTimeGuess);
  };

  const handleGameGuessUpdate = (value) => {
    gameGuessUpdate(value, setGameGuess);
  };

  const handlePlay = () => {
    play(guessCount, gameAnswerIndex, timeAnswerIndex, songList);
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
                <Input onChange={event => handleTimeGuessUpdate(event.target.value)} style={{display: "inline-block"}} className="GuessList" list='times' placeholder='Choose time...' ></Input>
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

              <button onClick={() =>submit(timeGuess, gameGuess, timeAnswer, gameAnswer, setGuessCount, setAnswerSubmitted, setResult1, setResult2, setResult3, setResult4, setTotalAnswer, guessCount, gameAnswerIndex, timeAnswerIndex)} className="SubmitButton">
                <p>Submit!</p>
              </button>

            </div>

          </div>
        </div>
    );
};

export default App;
