import { NavLink } from 'react-router-dom';
import "./SideNavbar.css"

const SideNavbar = () => {
    return (
        <div className="SideNavbar">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/create-file">My Files</NavLink>
                </li>
                <li>
                    <NavLink to="/read-file">Public Files</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default SideNavbar;