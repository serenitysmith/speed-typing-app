import { useState, useEffect, useRef } from "react";

function useWordGame() {
  // Initial setup
  const STARTING_TIME = 15;
  const [text, setText] = useState(""); // State to hold the text input
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME); // State for countdown timer
  const [isTimeRunning, setIsTimeRunning] = useState(false); // State to track whether the game is running or not
  const [wordCount, setWordCount] = useState(0); // State to hold the word count
  const textBoxRef = useRef(null); // Reference to the text input element

  // Function to handle text input change
  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  // Function to count words in the text
  const countWords = (text) => {
    let wordsArr = text.trim().split(" ");
    let filteredWords = wordsArr.filter((word) => word !== "");
    return filteredWords.length;
  };

  // Effect to handle countdown and end the game
  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      // Update time remaining every second
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      // If time is up, end the game
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  // Function to start the game
  const startGame = () => {
    setIsTimeRunning(true);
    setText("");
    setWordCount(0);
    setTimeRemaining(STARTING_TIME);
    textBoxRef.current.disabled = false; // Enable the text input
    textBoxRef.current.focus(); // Set focus on the text input
  };

  // Function to end the game
  const endGame = () => {
    setIsTimeRunning(false);
    setWordCount(countWords(text)); // Count words in the final text
  };

  // Return the values and functions for external use
  return {
    textBoxRef,
    text,
    handleChange,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
  };
}

export default useWordGame;
