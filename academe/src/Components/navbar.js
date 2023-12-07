import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="topnav">
            <ul>
                <img src="./logo.png" alt="logo"/>
                <li> 
                    <NavLink className={({isActive})=> (isActive? "active" : "inactive")} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => (isActive? "active" : "inactive")} to="/grade">Grade</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/todolist">To-Do List</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/calendar">Calendar</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/profile">Profile</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;