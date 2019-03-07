import React from 'react';
import '../styles/Navigation.css';
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className="main">
            <ul>
                <li><NavLink to="/" exact activeClassName="home">ADD TASK</NavLink></li>
                <li><NavLink to="/doneTasks" activeClassName="doneTasks">DONE TASKS</NavLink></li>
                <li><NavLink to="/waitingTasks" activeClassName="waitingTasks">WAITING TASKS</NavLink></li>
            </ul>
        </nav>)
}

export default Navigation;