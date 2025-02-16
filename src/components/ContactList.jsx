import React from "react"
import ContactCard from "./ContactCard"
export default function ContactList({ contacts }) {
  return (
    <div>
      <ul className="list-group  mt-3">
        <div className="list-group">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} {...contact} />
          ))}
        </div>
      </ul>
    </div>
  )
}
