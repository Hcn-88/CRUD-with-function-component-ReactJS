import React from 'react';

const Table = (props) => {

  // DESTRUCTURING THE PROPS
  const { contacts, deleteContact, selectContact } = props;

  return (
    <div>
      <table className="table table-striped table-bordered text-center mt-5">
        <thead className="table-light">
          <tr>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.age}</td>
              <td>{contact.gender}</td>
              <td className='d-flex justify-content-evenly'>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteContact(index)}
                >
                  Delete
                </button>
                <button
                  className='btn btn-outline-warning'
                  onClick={() => selectContact(index)}>Select</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table