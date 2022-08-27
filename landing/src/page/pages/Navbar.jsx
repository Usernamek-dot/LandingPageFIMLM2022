import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <p>navbar</p>
      <Link className="links" to="/Home">
        Home
      </Link>
      <Link className="links" to="/About">
        About
      </Link>
      <Link className="links" to="/Contact">
        Contact
      </Link>
    </>
  );
};
