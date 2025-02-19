import React, { useState } from "react"
import { useNavigate } from "react-router-dom" // ✅ Import useNavigate

function AddContact({ addContact }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const navigate = useNavigate() // ✅ Initialize useNavigate

  const add = (e) => {
    e.preventDefault()

    if (!name || !email) {
      alert("All fields are required!")
      return
    }

    // Create a new contact object
    const newContact = {
      id: Date.now().toString(),
      name,
      email,
    }

    addContact(newContact) // ✅ Add the contact

    // Clear input fields
    setName("")
    setEmail("")

    // ✅ Navigate back to the ContactList page ("/")
    navigate("/")
  }

  return (
    <div>
      <form onSubmit={add}>
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
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Add Contact
        </button>
      </form>
    </div>
  )
}

export default AddContact
