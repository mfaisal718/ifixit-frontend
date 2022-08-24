import "bulma/css/bulma.min.css";
import { Navbar } from "react-bulma-components";

function Header(props) {
  return (
    <nav>
      <Navbar.Item href="/">
        <Navbar.Link>ifixit</Navbar.Link>
      </Navbar.Item>
    </nav>
  );
}

export default Header;
