import './App.css';
import { Routes, Route } from 'react-router-dom';
import {About} from './components/about/About'
import Course  from './components/course/My Course';
import {Home} from './components/home/Home'
import Login from './components/login/Login';
import Signin from './components/registration/Signin'

function App() {
  return (
    <div >
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signin' element={<Signin />}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/course' element={<Course/>}/>       
      </Routes>
    </div>
  );
}

export default App;
