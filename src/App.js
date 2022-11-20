import './App.css';
import { Users } from './components/Users';
import Button from './components/Button';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Button />}>
        </Route>
        <Route path='/userpage' element={<Users />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
