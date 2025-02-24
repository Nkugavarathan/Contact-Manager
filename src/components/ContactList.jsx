// import React from "react"
// import { useNavigate } from "react-router-dom" // ✅ Import useNavigate
// import ContactCard from "./ContactCard" // ✅ Import ContactCard

// const ContactList = ({ contacts }) => {
//   const navigate = useNavigate() // ✅ Initialize useNavigate

//   return (
//     <div className="container mt-4">
//       {/* ✅ Add Contact Button */}
//       <button className="btn btn-primary mb-3" onClick={() => navigate("/add")}>
//         Add Contact
//       </button>

//       {/* ✅ Display the list of contacts */}
//       <div className="list-group">
//         {contacts.length > 0 ? (
//           contacts.map((contact) => (
//             <ContactCard
//               key={contact.id}
//               id={contact.id}
//               name={contact.name}
//               email={contact.email}
//               deleteContact={contact.id}
//             />
//           ))
//         ) : (
//           <p>No contacts found. Please add one!</p>
//         )}
//       </div>
//     </div>
//   )
// }

// export default ContactList

import React from "react"
import ContactCard from "./ContactCard"
import { Link } from "react-router-dom"

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className="mt-3">
      <h3>Contact List</h3>
      <div className="list-group">
        <Link to="/add">
          <button className="btn btn-primary my-3 ">Add Contact</button>
        </Link>

        {contacts.length > 0 ? (
          contacts.map(({ id, name, email }) => (
            <ContactCard
              key={id}
              id={id}
              name={name}
              email={email}
              deleteContact={deleteContact}
            />
          ))
        ) : (
          <p>No contacts found. Please add one!</p>
        )}
      </div>
    </div>
  )
}

export default ContactList
