
import './App.scss';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home/home';
import History from './components/History/history';
import Help from './components/Help/help';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import {useReducer} from 'react';
import historyReducer ,{ addAction } from './Reducer.js';

const initialState = {
  history: [],
}

function App() {
  const [state, dispatch] = useReducer(historyReducer, initialState);
  const addHistory = (action) => {
    dispatch(addAction(action));
  }
  console.log(state);
  return (
    <div className="App">
      <Header/>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home addHistory={addHistory} state = {state}/>} />
        <Route path="History" element={<History history = {state}/>} />
        <Route path="Help" element={<Help/>} />
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;
