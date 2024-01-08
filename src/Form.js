import React, { useState } from "react";
import Table from "./Table";

const Form = ()  => {

  const [editedContact, setEditedContact] = useState()
  const [show, setShow] = useState(false)
  const [contacts, setContacts] = useState([]);
  const [state, setState] = useState([{
    name: "",
    email: "",
    age: "",
    gender: ""
  }]);

  const getData = (event) => {
    let fieldName = event.target.getAttribute("name");
    let fieldValue = event.target.value;
    const newContact = {...state}
    newContact[fieldName] = fieldValue;
    setState(newContact);
  }
  
  const postData = (event) => {
    event.preventDefault();
    setContacts(prev => [...prev, state])
    setState({
      name: "",
      email: "",
      age: "",
      gender: ""
    });
  };

  const removeContact = (ind) => {
    let updatedContact = contacts.filter((obj, key) => (
      key !== ind
    ));
    setContacts(updatedContact);
  }

  const contactSelected = (ind) => {
    setState(contacts[ind]);
    setShow(!show)
    setEditedContact(ind)
  };

  const updateContact = () => {
    // editedContacted => the targeted index
    // 1 => the total of elements
    // state => the replacement of the targeted index (editedContact)
    contacts.splice(editedContact, 1, state);
    setContacts([...contacts]);
    setShow(!show);
    setState({
      name: "",
      email: "",
      age: "",
      gender: ""
    });
  }

  return (
    <div className="container">
      <form className="w-50 mx-auto" autoComplete="off" onSubmit={postData}>
        <input
          className="form-control mt-3"
          type="text"
          name="name"
          value={state.name}
          placeholder="Name..."
          onChange={getData}
          required
        />
        <input
          className="form-control my-3"
          type="text"
          name="email"
          value={state.email}
          placeholder="Email..."
          onChange={getData}
          required
        />
        <input
          className="form-control"
          type="number"
          name="age"
          value={state.age}
          placeholder="Age..."
          onChange={getData}
          required
        />
        <input
          className="form-control my-3"
          type="text"
          name="gender"
          value={state.gender}
          placeholder="Gender..."
          onChange={getData}
          required
        />
        {!show ? (
          <button className="btn btn-secondary d-block w-100" type="submit">
            Submit
          </button>
        ) : (
          ""
        )}
      </form>
      { show ?
      <button className="btn btn-info d-block w-50 mx-auto" onClick={updateContact}>
        Update
      </button> : "" }
      <Table
        contacts={contacts}
        deleteContact={removeContact}
        selectContact={contactSelected}
      />
    </div>
  );
}

export default Form;
