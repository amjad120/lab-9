import {Link} from "react-router-dom";
import "./Header.css";
const Header=()=>{
    return(
        <>
        <nav className="navbar">
        <ul id="nav">
            <li><h1>Food world</h1></li>
            <li><Link className="btn" to="/">Home </Link></li>
            <li><Link className="btn" to="/About">About </Link></li>
        </ul>
        </nav>
        </>
    );
}

export default Header;