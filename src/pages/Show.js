import { useState } from "react";
import "bulma/css/bulma.min.css";
import { Button } from "react-bulma-components";

function Show(props) {
  const id = props.match.params.id;
  const customers = props.customers;
  const custy = customers.find((c) => c._id === id);

  const [editForm, setEditForm] = useState(custy);

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateCustomers(editForm);
    props.history.push("/");
  };

  const removeCustomers = (event) => {
    props.deleteCustomers(custy._id);
    props.history.push("/");
  };

  return (
    <div className="customers">
      <h1>{customers.name}</h1>
      <h2>{customers.damage}</h2>
      <h2>{customers.phone}</h2>
      <h2>{customers.start}</h2>
      <h2>{customers.finish}</h2>
      <img src={customers.image} alt={customers.name} />
      <Button id="delete" color="danger" size="small" onClick={removeCustomers}>
        DELETE
      </Button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.damage}
          name="damage"
          placeholder="damage"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.phone}
          name="phone"
          placeholder="phone number"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.start}
          name="start"
          placeholder="dropoff date"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.finish}
          name="finish"
          placeholder="pickup date"
          onChange={handleChange}
        />
        <Button type="submit" value="UPDATE" color="primary" size="small">
          UPDATE
        </Button>
      </form>
    </div>
  );
}

export default Show;
