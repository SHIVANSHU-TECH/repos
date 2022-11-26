import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainBody from "./components/MainPage/MainBody";
import SecondPage from "./components/SecondPage/SecondPage";
export default function App() {
  return (
    <div className="App">
      <Router>
        <MainBody />
      </Router>
    </div>
  );
}
