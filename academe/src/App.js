import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/home";
import Grade from "./Pages/grade";
import SemesterGrade from "./Pages/semesterGrade";
import Todolist from "./Pages/todolist";
import Calendar from "./Pages/calendar";
import Profile from "./Pages/profile";
import NavigationBar from "./Components/navigationBar";
import UnitGrade from "./Pages/unitGrade";
import CoffeeMel from "./Pages/coffeeMel";

//https://hygraph.com/blog/routing-in-react
function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffeeMel" element={<CoffeeMel />} />
        <Route path="/grade" element={<Grade />} />
        <Route path="/semesterGrade" element={<SemesterGrade />} />
        <Route path="/todolist" element={<Todolist />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/unitGrade" element={<UnitGrade />} />
      </Routes>
    </>
  );
}

export default App;
