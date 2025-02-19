import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Header from "./components/Header"
import AddContact from "./components/AddContact"
import ContactList from "./components/ContactList"
import "./App.css"

function App() {
  // Load contacts from localStorage or use an empty array
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts")
    return savedContacts ? JSON.parse(savedContacts) : []
  })

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])

  // [{
  //   id: "1",
  //   name: "varathan",
  //   email: "kugavarathan28@gmail.com",
  // },
  // {
  //   id: "2",
  //   name: "jirothusi",
  //   email: "jiro141222001@gmail.com",
  // },
  // {
  //   id: "1",
  //   name: "varathan",
  //   email: "kugavarathan28@gmail.com",
  // },
  // {
  //   id: "1",
  //   name: "momodial",
  //   email: "kugavarathan28@gmail.com",
  // }],

  const addContact = (newContact) => {
    setContacts((prevContacts) => [newContact, ...prevContacts]) // New contacts come first
  }

  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/add" element={<AddContact addContact={addContact} />} />
          <Route path="/" exact element={<ContactList contacts={contacts} />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App
