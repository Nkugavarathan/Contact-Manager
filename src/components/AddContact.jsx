import React from "react"

function AddContact() {
  return (
    <div>
      <form action="/action_page.php">
        <div className="mt-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            name="name"
          />
        </div>

        <div className="mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  )
}
export default AddContact

/*
import React, { useState } from "react"

function AddContact({ addContact }) {
  // State variables to store the name and email from the user input
  const [name, setName] = useState("") // Initial value is an empty string
  const [email, setEmail] = useState("") // Initial value is an empty string

  // Event handler for when the user types in the name input field
  const handleNameChange = (e) => {
    setName(e.target.value) // Update the name state with the current input value
  }

  // Event handler for when the user types in the email input field
  const handleEmailChange = (e) => {
    setEmail(e.target.value) // Update the email state with the current input value
  }

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault() // Prevent the default form submission (page reload)

    // Create a new contact object using the captured input values
    const newContact = {
      id: Date.now().toString(), // Unique id based on the current timestamp
      name,
      email,
    }

    // Call the addContact function passed from the parent component to add the new contact
    addContact(newContact)

    // Clear the input fields after the contact is added
    setName("")
    setEmail("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mt-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            value={name} // Bind the value of the input field to the `name` state
            onChange={handleNameChange} // Call handleNameChange on input change
          />
        </div>

        <div className="mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email} // Bind the value of the input field to the `email` state
            onChange={handleEmailChange} // Call handleEmailChange on input change
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Add
        </button>
      </form>
    </div>
  )
}

export default AddContact */
