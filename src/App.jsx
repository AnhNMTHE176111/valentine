import { useState } from "react";
import "./App.css";
import LovePage from "./pages/LovePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LovePage />
    </>
  );
}

export default App;
