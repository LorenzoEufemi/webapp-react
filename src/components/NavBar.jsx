import { NavLink } from "react-router-dom";
function NavBar() {

    const navLinks = [
        {
            path: "/",
            title: "Home"
        },
        {
            path: "/movies",
            title: "Film"
        }
    ];

    return (
        <section>
            <ul className="nav nav-tabs">
            {navLinks.map((curLink, index) => (
                <li className="nav-item" key={index}>
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to={curLink.path}
                  >
                    {curLink.title}
                  </NavLink>
                </li>
              ))}
                
            </ul>
        </section>
    )
}

export default NavBar;