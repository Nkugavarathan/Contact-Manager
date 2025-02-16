import React, { useState } from "react"
import Header from "./components/Header"
import AddContact from "./components/AddContact"
import ContactList from "./components/ContactList"
import "./App.css"
function App() {
  const [contacts, setContacts] = useState([
    {
      id: "1",
      name: "varathan",
      email: "kugavarathan28@gmail.com",
    },
    {
      id: "2",
      name: "jiro",
      email: "jiro14@gmail.com",
    },
  ])
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      ;[...prevContacts, newContact]
    })
  }
  return (
    <div className="container">
      <Header />
      <AddContact addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  )
}
export default App
