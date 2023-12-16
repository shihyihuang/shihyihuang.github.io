import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./Pages/home";
import Grade from "./Pages/grade";
import EditUnit from "./Pages/editUnit";
import Todolist from "./Pages/todolist";
import Calendar from "./Pages/calendar";
import Profile from "./Pages/profile";
import NavigationBar from "./Components/navigationBar";
import EditSubject from "./Pages/editSubject";
import EditAssignment from "./Pages/editAssignment";
import CoffeeMel from "./Pages/coffeeMel";

//https://hygraph.com/blog/routing-in-react
function App() {
  const navigate = useNavigate();

  return (
    <>
      <NavigationBar />
      <button onClick={() => navigate(-1)}>go back</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffeeMel" element={<CoffeeMel />} />
        <Route path="/grade" element={<Grade />} />
        <Route path="/editUnit" element={<EditUnit />} />
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
