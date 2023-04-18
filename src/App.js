import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Channel from './components/Channel/Channel';
import Lobby from './components/Lobby/Lobby';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Channel />} />
        <Route path='/channel/:channelId' element={<Channel />} />
        <Route path='/lobby' element={<Lobby />} />
      </Routes>
    </Router>
  );
}

export default App;
