import { useState } from "react";
import "./index.css";

function App() {
  const [status, setStatus] = useState(true);

  let styles = {
    borderRadius: status ? "50%" : "20px",
    width: "200px",
    height: status ? "200px" : "80px",
    border: "1px solid black",
    transform: status ? `rotate(180deg)` : `rotate(0deg)`,
    // backgroundColor: status ? "blue" : "pink",
  };

  return (
    <div className="App">
      <div
        className="shape"
        style={styles}
        onClick={() => setStatus(!status)}
      ></div>
      <h1 style={{ opacity: status ? 1 : 0 }}>안녕</h1>
    </div>
  );
}

export default App;
