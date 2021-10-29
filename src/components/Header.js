import React from 'react';
import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router';


const Nav = () => {
    const history = useHistory()
    const handleGoBackButton = () => {
        history.goBack()
    }
    const routes = [{ id: 1, name: 'Home', route: '/home' }, { id: 2, name: 'History', route: '/history' }, { id: 3, name: 'Overview', route: '/overview' }]
    return (
        <>
            <ul className="nav-list">
                {routes.map(link => <li key={link.id} className="nav-item"><NavLink className="nav-link" activeClassName="nav-link--active" to={link.route}>{link.name}</NavLink></li>)}
            </ul>
            <button type="button" onClick={handleGoBackButton}>Go back</button>
        </>
    )
}

export default Nav