
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home'
import Friends from './components/Friends/Friends'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <h1>Welcome to my fancy websit</h1>
       <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/friends' element={<Friends></Friends>}></Route>
         <Route path='/about' element={<About></About>}></Route>
         <Route path='*' element={<NotFound></NotFound>}></Route>
       </Routes>
    </div>
  );
} 


export default App;