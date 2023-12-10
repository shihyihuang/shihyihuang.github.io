import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/home';
import Grade from './Pages/grade';
import Todolist from './Pages/todolist';
import Calendar from './Pages/calendar';
import Profile from './Pages/profile';
import Navbar from './Components/navbar';
import AddSemester from './Pages/addSemester';
import CoffeeMel from './Pages/coffeeMel';


//https://hygraph.com/blog/routing-in-react
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/coffeeMel" element={<CoffeeMel />} />
        <Route path="/grade" element={<Grade/>} />
        <Route path="/todolist" element={<Todolist/>} />
        <Route path="/calendar" element={<Calendar/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/addSemester" element={<AddSemester/>}/>
      </Routes>
    </>
  );
}

export default App;
