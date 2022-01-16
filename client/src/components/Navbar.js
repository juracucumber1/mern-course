import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from "../context/AuthContext";

export const Navbar = () => {
    const  history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <nav>
            <div className="nav-wrapper light-blue darken-4" style={{padding: '0 2rem'}}>
                <span className="brand-logo">Сократить ссылку</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/create">Создать</NavLink></li>
                    <li><NavLink to="/links">Cсылки</NavLink></li>
                    <li><a href="/" onClick={logoutHandler} to="/links">Выйти</a></li>
                </ul>
            </div>
        </nav>
    )
}