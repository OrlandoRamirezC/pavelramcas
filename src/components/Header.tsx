import { Link } from "react-router";

export const Header = () => {
    return (
        <header>
            <Link to="/" className="link-sin-sub">
                <h1>PÁVEL RAMCAS</h1>
            </Link>
            <div className="iconos">
                <a href="https://www.facebook.com/pavel.psht.1"><i id="contact"
                    className="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/pavelramcas"><i className="fa-brands fa-instagram"></i></a>
            </div>
        </header>
    );
};