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

// Contains the names of each song for display.
let songNames = [
  ["Animal Crossing GameCube 12AM", "Animal Crossing GameCube 1AM", "Animal Crossing GameCube 2AM", "Animal Crossing GameCube 3AM", "Animal Crossing GameCube 4AM", "Animal Crossing GameCube 5AM", "Animal Crossing GameCube 6AM", "Animal Crossing GameCube 7AM", "Animal Crossing GameCube 8AM", "Animal Crossing GameCube 9AM", "Animal Crossing GameCube 10AM", "Animal Crossing GameCube 11AM", "Animal Crossing GameCube 12PM", "Animal Crossing GameCube 1PM", "Animal Crossing GameCube 2PM", "Animal Crossing GameCube 3PM", "Animal Crossing GameCube 4PM", "Animal Crossing GameCube 5PM", "Animal Crossing GameCube 6PM", "Animal Crossing GameCube 7PM", "Animal Crossing GameCube 8PM", "Animal Crossing GameCube 9PM", "Animal Crossing GameCube 10PM", "Animal Crossing GameCube 11PM"],
  ["Animal Crossing City Folk and Wild World 12AM", "Animal Crossing City Folk and Wild World 1AM", "Animal Crossing City Folk and Wild World 2AM", "Animal Crossing City Folk and Wild World 3AM", "Animal Crossing City Folk and Wild World 4AM", "Animal Crossing City Folk and Wild World 5AM", "Animal Crossing City Folk and Wild World 6AM", "Animal Crossing City Folk and Wild World 7AM", "Animal Crossing City Folk and Wild World 8AM", "Animal Crossing City Folk and Wild World 9AM", "Animal Crossing City Folk and Wild World 10AM", "Animal Crossing City Folk and Wild World 11AM", "Animal Crossing City Folk and Wild World 12PM", "Animal Crossing City Folk and Wild World 1PM", "Animal Crossing City Folk and Wild World 2PM", "Animal Crossing City Folk and Wild World 3PM", "Animal Crossing City Folk and Wild World 4PM", "Animal Crossing City Folk and Wild World 5PM", "Animal Crossing City Folk and Wild World 6PM", "Animal Crossing City Folk and Wild World 7PM", "Animal Crossing City Folk and Wild World 8PM", "Animal Crossing City Folk and Wild World 9PM", "Animal Crossing City Folk and Wild World 10PM", "Animal Crossing City Folk and Wild World 11PM"],
  ["Animal Crossing New Leaf 12AM", "Animal Crossing New Leaf 1AM", "Animal Crossing New Leaf 2AM", "Animal Crossing New Leaf 3AM", "Animal Crossing New Leaf 4AM", "Animal Crossing New Leaf 5AM", "Animal Crossing New Leaf 6AM", "Animal Crossing New Leaf 7AM", "Animal Crossing New Leaf 8AM", "Animal Crossing New Leaf 9AM", "Animal Crossing New Leaf 10AM", "Animal Crossing New Leaf 11AM", "Animal Crossing New Leaf 12PM", "Animal Crossing New Leaf 1PM", "Animal Crossing New Leaf 2PM", "Animal Crossing New Leaf 3PM", "Animal Crossing New Leaf 4PM", "Animal Crossing New Leaf 5PM", "Animal Crossing New Leaf 6PM", "Animal Crossing New Leaf 7PM", "Animal Crossing New Leaf 8PM", "Animal Crossing New Leaf 9PM", "Animal Crossing New Leaf 10PM", "Animal Crossing New Leaf 11PM"],
  ["Animal Crossing New Horizons 12AM", "Animal Crossing New Horizons 1AM", "Animal Crossing New Horizons 2AM", "Animal Crossing New Horizons 3AM", "Animal Crossing New Horizons 4AM", "Animal Crossing New Horizons 5AM", "Animal Crossing New Horizons 6AM", "Animal Crossing New Horizons 7AM", "Animal Crossing New Horizons 8AM", "Animal Crossing New Horizons 9AM", "Animal Crossing New Horizons 10AM", "Animal Crossing New Horizons 11AM", "Animal Crossing New Horizons 12PM", "Animal Crossing New Horizons 1PM", "Animal Crossing New Horizons 2PM", "Animal Crossing New Horizons 3PM", "Animal Crossing New Horizons 4PM", "Animal Crossing New Horizons 5PM", "Animal Crossing New Horizons 6PM", "Animal Crossing New Horizons 7PM", "Animal Crossing New Horizons 8PM", "Animal Crossing New Horizons 9PM", "Animal Crossing New Horizons 10PM", "Animal Crossing New Horizons 11PM"]
];

function App() {

  // Sets the random song and game.
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

  // Returns the app to be displayed.
  return (
      <div className="App">
        <header className="Header">
          
          <img src="leaftle2.png" className="logo"></img>
          
        </header>

      <div className="Body">
        <div className='GuessBox'>
          <img src="leaf.png" className='GuessBoxLeft'></img>
            <p className="ResultText">{result1}</p>
          <img src="leaf.png" className='GuessBoxRight'></img>
        </div>
        
        <div className='GuessBox'>
          <img src="leaf.png" className='GuessBoxLeft'></img>
            <p className="ResultText">{result2}</p>
          <img src="leaf.png" className='GuessBoxRight'></img>
        </div>

        <div className='GuessBox'>
          <img src="leaf.png" className='GuessBoxLeft'></img>
            <p className="ResultText">{result3}</p>
          <img src="leaf.png" className='GuessBoxRight'></img>
        </div>
        
          <div className='GuessBox'>
            <img src="leaf.png" className='GuessBoxLeft'></img>
              <p className="ResultText">{result4}{totalAnswer}</p>
            <img src="leaf.png" className='GuessBoxRight'></img>
          </div>
          
        </div>

        <div className="Play">
            <button onClick={play} className="PlayButton">
              <img className="help"src="leafplayicon.png"></img>
            </button>
        </div>

        <div className="SongSelection">

          <div>
                <Input onChange={event => timeGuessUpdate(event.target.value)} style={{display: "inline-block"}} className="GuessList" list='times' placeholder='Choose time...' />
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
            <Input onChange={event => gameGuessUpdate(event.target.value)} style={{display: "inline-block"}} className="GuessList" list='games' placeholder='Choose game...' ></Input>
                <datalist id='games'>
                  <option value='Animal Crossing GameCube'>Animal Crossing GameCube</option>
                  <option value='Animal Crossing City Folk and Wild World'>Animal Crossing City Folk and Wild World</option>
                  <option value='Animal Crossing New Leaf'>Animal Crossing New Leaf</option>
                  <option value='Animal Crossing New Horizons'>Animal Crossing New Horizons</option>
                </datalist>
            </div>

            <div>

              <button onClick={submit} className="SubmitButton">
                <p>Submit!</p>
              </button>

            </div>

          </div>
        </div>
    );
}

export default App;
