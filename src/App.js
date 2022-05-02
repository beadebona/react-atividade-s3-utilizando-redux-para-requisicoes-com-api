import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import DigimonList from './components/DigimonList';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Search/>
      <DigimonList/>
      <ToastContainer/>
    </div>
  );
}

export default App;
