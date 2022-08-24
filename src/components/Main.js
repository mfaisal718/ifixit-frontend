import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

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
}

export default Main;
