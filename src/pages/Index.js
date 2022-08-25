import { Link } from "react-router-dom";
import { useState } from "react";
import { Card } from "react-bulma-components";
import { Button } from "react-bulma-components";
import { Form } from "react-bulma-components";

function Index(props) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    name: "",
    damage: "",
    image: "",
    start: "",
    finish: "",
    phone: "",
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createdCustomers(newForm);
    setNewForm({
      name: "",
      damage: "",
      image: "",
      start: "",
      finish: "",
      phone: "",
    });
  };

  // loaded function
  const loaded = () => {
    return props.customers.map((customers) => (
      <Card style={{ width: 300, margin: "auto" }}>
        <Card.Header.Title />
        <div key={customers._id} className="customers">
          <Link to={`/customers/${customers._id}`}>
            <h1>{customers.name}</h1>
          </Link>
          <h2>
            {customers.damage}
            {customers.phone}
          </h2>
          <h3>
            {customers.start}
            {customers.finish}
          </h3>
        </div>
        <Card.Image src={customers.image} alt={customers.name} />
      </Card>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <>
          <Form.field>
            <Form.label>Name</Form.label>
            <Form.control>
              <Form.input
                type="text"
                value={newForm.name}
                name="name"
                placeholder="name"
                onChange={handleChange}
              />
            </Form.control>
          </Form.field>
          <Form.field>
            <Form.label>Picture</Form.label>
            <Form.control>
              <Form.input
                type="text"
                value={newForm.image}
                name="image"
                placeholder="image URL"
                onChange={handleChange}
              />
            </Form.control>
          </Form.field>
          <Form.field>
            <Form.label>Damage</Form.label>
            <Form.control>
              <Form.input
                type="text"
                value={newForm.damage}
                name="damage"
                placeholder="damage"
                onChange={handleChange}
              />
            </Form.control>
          </Form.field>
          <Form.field>
            <Form.label>Phone Number</Form.label>
            <Form.control>
              <Form.input
                type="text"
                value={newForm.phone}
                name="phone"
                placeholder="phone number"
                onChange={handleChange}
              />
            </Form.control>
          </Form.field>
          <Form.field>
            <Form.label>Dropoff Request</Form.label>
            <Form.control>
              <Form.input
                type="text"
                value={newForm.start}
                name="start"
                placeholder="dropoff date"
                onChange={handleChange}
              />
            </Form.control>
          </Form.field>
          <Form.field>
            <Form.label>Pickup Request</Form.label>
            <Form.control>
              <Form.input
                type="text"
                value={newForm.finish}
                name="finish"
                placeholder="pickup date"
                onChange={handleChange}
              />
            </Form.control>
          </Form.field>
        </>
        <Button color="primary" type="submit" value="request" size="small">
          REQUEST
        </Button>
      </form>
      {props.customers ? loaded() : loading()}
    </section>
  );
}

export default Index;
