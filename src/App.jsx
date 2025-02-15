import React from "react"
import Header from "./components/Header"
import AddContact from "./components/AddContact"
import ContactList from "./components/ContactList"

function App() {
  const contacts = [
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
  ]
  return (
    <div className="container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  )
}
export default App
