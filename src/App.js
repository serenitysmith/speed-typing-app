import React from 'react';
import useWordGame from './Hooks/useWordGame'
import Footer from './Footer/footer'
import './App.css'

function App() {
  // Destructuring values and functions from the custom hook
  const {
    textBoxRef, 
    text, 
    handleChange, 
    isTimeRunning, 
    timeRemaining, 
    startGame, 
    wordCount
  } = useWordGame();

  // Render the main application component
  return (
    <div>
      <h1>How fast do you type?</h1>

      {/* Textarea for typing, with event handler for text change */}
      <textarea 
          onChange={handleChange} 
          value={text} 
          disabled={!isTimeRunning} // Disable textarea if the game is not running
          ref={textBoxRef} // Reference to the textarea element
      />

      {/* Display remaining time during the game */}
      <h4>Time remaining: {timeRemaining}</h4>

      {/* Start button to begin the typing game */}
      <button 
          onClick={startGame} 
          disabled={isTimeRunning} // Disable the button if the game is already running
        >Start</button>
  
      {/* Display the word count after the game ends */}
      <h1>Word Count: {wordCount}</h1>

      {/* Include the Footer component */}
      <Footer />
    </div>
  );
}

export default App;