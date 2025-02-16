import React, { useState, useEffect } from "react"
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
    setContacts((prevContacts) => [...prevContacts, newContact])
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
