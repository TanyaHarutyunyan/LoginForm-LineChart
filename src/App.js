import './App.css';
import MainForm from "./Components/MainForm/mainForm"
import LineChartWrapper from './Components/LineChartWrapper/lineChartWrapper';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LineChartConfirmed from './Components/LineChartConfirmed/lineChartConfirmed';
import LineChartDeaths from './Components/LineChartDeaths/lineChartDeaths';

function App() {
  return (
    <Router>
    <div className="poster">
    <Routes>
      <Route path="/" element = {<MainForm />} />
      <Route path="/logInForm" element = {<MainForm />} />
      <Route path="/lineChartWrapper" element = {<LineChartWrapper />} />
      <Route path="/confirmed" element = {<LineChartConfirmed />} />
      <Route path="/deaths" element ={<LineChartDeaths />} />
    </Routes> 
    </div>
    </Router>
  );
}

export default App;
