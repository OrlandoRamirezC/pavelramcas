import { Link } from "react-router";

export const Navbar = () => {
    return (
        <nav>

            <Link to="/about">ABOUT</Link>
            <Link to="/work">WORK</Link>
            <Link to="/contact">CONTACT</Link>

        </nav>
    );
};