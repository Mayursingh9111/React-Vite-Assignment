import { useState } from "react";
import "./App.css";
import ProgressBar from "./Progress";
import { useEffect } from "react";

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      if (progress < 100) {
        setProgress((p) => p + 1);
      }
    }, 50);

    return () => {
      clearInterval(time);
    };
  }, [progress]);
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <ProgressBar progress={progress} color={"lightgreen"} />
    </div>
  );
}

export default App;
