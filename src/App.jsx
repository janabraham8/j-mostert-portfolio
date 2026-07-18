import { useState } from 'react'; 
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import "./index.css";

function App() {
  // Flag to manage the app state: true means the user sees the dashboard, false shows the loader
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* Renders the loading screen overlay; once complete, it toggles our loading state flag */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      
      {/* 
        Main content wrapper: Uses opacity transition filters to fade your dashboard smoothly 
        into view as soon as the loading state flag changes to true.
      */}
      <div 
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      > 
        {/* Safe placeholder text verifying the build initialization matches up-to-date syntax */}
        <p className="p-10 text-xl font-mono">Website content loaded successfully.</p>
      </div>
    </> 
  );
}

export default App;