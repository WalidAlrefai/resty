
import './App.css';
// import { Routes, Route} from "react-router-dom";
import Home from './components/Home/home';
// import History from './components/History/history';
// import Help from './components/Help/help';
import Header from './components/Header/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/History" element={<History  />} />
        <Route path="/Help" element={<Help  />} />
      </Routes> */}
    </div>
  );
}

export default App;
