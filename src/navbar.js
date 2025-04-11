// src/Navbar.js
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/signup">Sign Up</Link> |{" "}
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;