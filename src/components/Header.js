import { React } from "react";
import "bulma/css/bulma.min.css";
import { Navbar } from "react-bulma-components";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function Header(props) {
  return (
    <ErrorBoundary>
      <nav>
        <Navbar.Item href="/">
          <Navbar.Link>ifixit</Navbar.Link>
        </Navbar.Item>
      </nav>
    </ErrorBoundary>
  );
}

export default Header;
