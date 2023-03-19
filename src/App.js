import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Screen from "./components/Screen/Screen";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="Tic-Tac-Toe">
        <Routes>
          <Route path="/" element={<Screen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
