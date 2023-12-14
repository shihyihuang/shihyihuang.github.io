import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/home";
import OverallGrade from "./Pages/overallGrade";
import SemesterOneGrade from "./Pages/semesterOneGrade";
import Todolist from "./Pages/todolist";
import Calendar from "./Pages/calendar";
import Profile from "./Pages/profile";
import NavigationBar from "./Components/navigationBar";
import EditSubject from "./Pages/editSubject";
import EditAssignment from "./Pages/editAssignment";
import CoffeeMel from "./Pages/coffeeMel";

//https://hygraph.com/blog/routing-in-react
function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffeeMel" element={<CoffeeMel />} />
        <Route path="/OverallGrade" element={<OverallGrade />} />
        <Route path="/SemesterOneGrade" element={<SemesterOneGrade />} />
        <Route path="/todolist" element={<Todolist />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editSubject" element={<EditSubject />} />
        <Route path="/editAssignment" element={<EditAssignment />} />
      </Routes>
    </>
  );
}

export default App;
