import { NavLink } from 'react-router-dom';
import { IoHomeSharp } from "react-icons/io5";
import { FaFolderOpen, FaFolder  } from "react-icons/fa";
import "./SideNavbar.css"

const SideNavbar = () => {
    return (
        <div className="SideNavbar">
            <ul>
                <li>
                    <NavLink to="/"><IoHomeSharp />Home</NavLink>
                </li>
                {/* <li>
                    <NavLink to="/createFiles"><FaFolder />My Files</NavLink>
                </li> */}
                <li>
                    <NavLink to="/publicFiles"><FaFolderOpen />Public Files</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default SideNavbar;