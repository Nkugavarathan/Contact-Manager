import React, { useState } from "react"

function AddContact({ addContact }) {
  const [name, setName] = useState()
  const [email, setEmail] = useState()

  const add = (e) => {
    e.preventDefault()

    if (!name || !email) {
      alert("All fields are required!")
      return
    }

    // Create a new contact object
    const newContact = {
      id: Date.now().toString(), // Generate a unique ID
      name,
      email,
    }

    // Call the addContact function passed from App.js
    addContact(newContact)

    // Clear the input fields after submission
    setName("")
    setEmail("")
  }

  return (
    <div>
      <form action="/action_page.php" onSubmit={add}>
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
