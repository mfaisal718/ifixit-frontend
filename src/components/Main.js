import { React } from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

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

function Main(props) {
  const [customers, setCustomers] = useState(null);

  const URL = "https://ifixit-backend.herokuapp.com/customers/";

  const getCustomers = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setCustomers(data);
  };

  const createdCustomers = async (customers) => {
    // make post request to create customers
    await fetch(URL, {
      method: "POST",
      headers: {
        "content-Type": "Application/json",
      },
      body: JSON.stringify(customers),
    });
    //update list of customers
    getCustomers();
  };

  const updateCustomers = async (customers, id) => {
    // make put request to create customers
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(customers),
    });
    // update list of customers
    getCustomers();
  };

  const deleteCustomers = async (id) => {
    // make delete request to create customers
    await fetch(URL + id, {
      method: "DELETE",
    });
    // update list of customers
    getCustomers();
  };

  useEffect(() => {
    getCustomers();
  }, []);

  <ErrorBoundary>
    return (
    <main>
      <Routes>
        <Route exact path="/">
          <Index customers={customers} createdCustomers={createdCustomers} />
        </Route>
        {customers && (
          <Route
            path="/customers/:id"
            render={(rp) => (
              <Show
                customers={customers}
                updateCustomers={updateCustomers}
                deleteCustomers={deleteCustomers}
                {...rp}
              />
            )}
          />
        )}
      </Routes>
    </main>
    );
  </ErrorBoundary>;
}

export default Main;
