import {NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return(
        <nav className="topnav">
            <ul>
                <button onClick={() => navigate('/')} > <img src="./logo.png" alt="logo"/> </button>
                <li> 
                    <NavLink className={({isActive})=> (isActive? "active" : "inactive")} to="/">Home</NavLink>
                </li> 
                <li>
                    <NavLink className={({isActive}) => (isActive? "active" : "inactive")} to="/coffeeMel">Coffee</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/calendar">Calendar</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/todolist">To-Do List</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => (isActive? "active" : "inactive")} to="/grade">Grade</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;