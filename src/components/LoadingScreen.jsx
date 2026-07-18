import { useEffect, useState } from "react";

// The LoadingScreen component takes an 'onComplete' function as a prop to call when finished
export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Loading />";

  useEffect(() => {
    let index = 0;
    
    // Creates a typing effect character by character
    const interval = setInterval(() => {
      index++;
      setText(fullText.substring(0, index));

      // Once the full text is typed out, clear the interval and wait 1 second to trigger completion
      if (index >= fullText.length) {
        clearInterval(interval);
        
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    // Clean up the timer if the component unmounts mid-animation
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    // Backdrop overlay: Pins the screen to the absolute top layer of the browser window
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      
      {/* Monospace terminal-style text container with flashing cursor block */}
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1">|</span>
      </div>

      {/* Outer wrapper for the progress bar */}
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        {/* Animated neon blue loading strip inside the bar */}
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
      
    </div>
  );
};