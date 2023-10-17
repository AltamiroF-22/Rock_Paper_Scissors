/* eslint-disable react-hooks/exhaustive-deps */
import "./UserOptions.sass";

// Options Icons
import Paper from "../../images/icon-paper.svg";
import Rock from "../../images/icon-rock.svg";
import Scissors from "../../images/icon-scissors.svg";

// componentes
import RenderUserChoice from "../renderUserChoice/RenderUserChoice";
import RenderMachineChoice from "../renderMachineChoice/RenderMachineChoice ";
import Score from "../score/Score";

import { useState, useRef, useEffect } from "react";

const UserOptions = () => {
  // OPTIONS AND 'PLAYERS' CHOICES
  const options = ["Paper", "Rock", "Scissors"];
  const userChoiceRef = useRef("");
  const [machineChoice, setMachineChoice] = useState("");

  // RENDER STATES
  const [playAgain, setPlayAgain] = useState(false);
  const [renderUserChoice, setRenderUserChoice] = useState(false);
  const [isMachineChoiceVisible, setIsMachineChoiceVisible] = useState(false);

  // WHO WON STATES
  const [isUserWinner, setIsUserWinner] = useState(true);
  const [winTieLose, setWinTieLose] = useState("");
  const [winTieLoseText, setWinTieLoseText] = useState(true);

  // SAVE LOCAL STORE (-SCORE-)
  const initialScore = parseInt(localStorage.getItem("Score"), 10) || 0;
  const [score, setScore] = useState(initialScore);

  //CHANGE THE SCORE VALUE IF WAS CHANGED
  useEffect(() => {
    localStorage.setItem("Score", score.toString());
  }, [score]);

  const handleClick = (value) => {
    // SET USER, MACHINE AND WIN OR LOSE TO  => "" AND IS USER WINNER => null
    userChoiceRef.current = "";
    setMachineChoice("");
    setWinTieLose("");
    setIsUserWinner(null);

    // TAKE THE USER OPTION BASED IN THE VALUE WHO COMES FROM HANDLE CLICK
    userChoiceRef.current = options[value];

    machineChoiceFunc();
  };

  // MACHINE CHOISING...
  const machineChoiceFunc = () => {
    const choicing = Math.floor(Math.random() * 3);

    setMachineChoice(options[choicing]);
  };

  useEffect(() => {
    // CONDITION WHO PREVENTS UNEXPECTED RENDERIZATION
    if (userChoiceRef.current === "" || machineChoice === "") return;

    checkResults();
  }, [userChoiceRef.current, machineChoice]);

  const checkResults = () => {
    const result =
      userChoiceRef.current === machineChoice
        ? "TIE"
        : (userChoiceRef.current === options[0] &&
            machineChoice === options[2]) ||
          (userChoiceRef.current === options[1] &&
            machineChoice === options[0]) ||
          (userChoiceRef.current === options[2] && machineChoice === options[1])
        ? "MACHINE"
        : "USER";

    showResults(result);
  };

  const showResults = (result) => {
    // RENDER IMMEDIATELY THE USER CHOICE
    setRenderUserChoice(true);

    const MACHINE_CHOICE_DELAY = 500; // (0.5 seconds)
    const RESULT_DELAY = 900; // (0.9 seconds)

    setTimeout(() => {
      setIsMachineChoiceVisible(true);
    }, MACHINE_CHOICE_DELAY);

    //SET WHO WINS OR IF WAS A TIE
    setTimeout(() => {
      if (result === "USER") {
        setScore(score + 1); // INCREASE THE SCORE +1
        setWinTieLose("YOU WIN");
        setIsUserWinner(true);
        setWinTieLoseText(true);
      } else if (result === "MACHINE") {
        setWinTieLose("YOU LOSE");
        setIsUserWinner(false);
        setWinTieLoseText(false);
        setScore(score - 1); // DECREASE THE SCORE -1
      } else {
        setWinTieLose("TIE");
        setIsUserWinner(null);
        setWinTieLoseText(true);
      }

      // SHOWS UP THE BUTTON: PLAY AGAIN
      setPlayAgain(true);
    }, RESULT_DELAY);
  };

  // HANDLE ACTION TO SHOW THE OPTIONS AGAIN
  const handleResetValuesToPlayAgain = () => {
    setPlayAgain(false);
    setRenderUserChoice(false);
    setIsMachineChoiceVisible(false);
  };

  return (
    <div>
      <Score score={score} />

      {/* RENDER IF USER HAS CHOSEN */}
      {renderUserChoice ? (
        <div className="rederized-botho-choices">
          <div className="title-div-choice">
            <h2>YOU PICKED</h2>

            {/* CHANGE THE STYLES OF THE USER CHOICE IF HAS WIN, LOSE OR IF WAS A TIE */}
            <div
              className={`preload ${
                isUserWinner
                  ? "user-winner-class"
                  : isUserWinner === null
                  ? "null-class"
                  : "loser"
              }`}
            >
              <RenderUserChoice userChoiceToRender={userChoiceRef.current} />
            </div>
          </div>

          <div className="title-div-choice mid">
            {/* CHANGE THE STYLES OF THE TEXT IF HAS WIN, LOSE OR IF WAS A TIE */}
            <h1 className={`${winTieLoseText ? "" : "red-text"}`}>
              {winTieLose}
            </h1>

            {/* THE BUTTON APPEARS WHEN STATES REQUEST*/}
            {/* CHANGE THE COLOR OF THE TEXT INSIDE THE BUTTON IF HAS WIN OR LOSE*/}
            {playAgain ? (
              <button
                className={`play-again-btn  ${
                  winTieLoseText ? "" : "red-text"
                }`}
                onClick={() => handleResetValuesToPlayAgain()}
              >
                PLAY AGAIN
              </button>
            ) : (
              ""
            )}
          </div>

          <div className="title-div-choice">
            <h2>THE HOUSE PICKED</h2>

            {/*RENDER AFTER 0.5 SECONDS AFTER USER CHOICES*/}
            {/* CHANGE THE STYLES OF THE USER CHOICE IF HAS WIN, LOSE OR IF WAS A TIE */}
            <div
              className={`preload ${
                isUserWinner
                  ? "loser"
                  : isUserWinner === null
                  ? "null-class"
                  : "user-winner-class"
              }`}
            >
              {isMachineChoiceVisible ? (
                <RenderMachineChoice machineChoiceToRender={machineChoice} />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="options">
          <div className="option" onClick={() => handleClick(0)}>
            <img src={Paper} alt="Paper Icon" />
          </div>
          <div className="option" onClick={() => handleClick(2)}>
            <img src={Scissors} alt="Paper Icon" />
          </div>
          <div className="option" onClick={() => handleClick(1)}>
            <img src={Rock} alt="Paper Icon" />
          </div>
        </div>
      )}
      {/* ^^^ USER OPTIONS WHEN THE GAME GET STARTED OR USER CLICK IN PLAY AGAIN ^^^ */}
    </div>
  );
};

export default UserOptions;
