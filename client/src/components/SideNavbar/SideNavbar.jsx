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
                    <NavLink to="/createFiles">My Files</NavLink>
                </li>
                <li>
                    <NavLink to="/publicFiles">Public Files</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default SideNavbar;