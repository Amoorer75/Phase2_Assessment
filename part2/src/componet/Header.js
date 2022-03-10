import { NavLink } from "react-router-dom"


function Header() {

    return (
        <header>
            <h1>Something to say</h1>
            <ul>
                <NavLink to={"/"}>
                    <li>Home</li>
                </NavLink>
                <NavLink to={"/cats"}>
                    <li>CATS</li>
                </NavLink>
                <NavLink to={"/dogs"}>
                    <li>DOGS</li>
                </NavLink>
                
            </ul>
        </header>
    );
}
export default Header;