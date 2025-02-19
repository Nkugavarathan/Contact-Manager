// import React from "react"
// import user from "../images/personicon.png"
// const ContactCard = ({ id, name, email }) => {
//   return (
//     <>
//       <div className="list-group">
//         {/* style={{ position: "relative" }}*/}
//         <li
//           class="list-group-item"
//           key={id}
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           <img
//             src={user}
//             alt="user"
//             // className="img-thumbnail"
//             style={{ borderRadius: 50, height: 100, width: 100 }}
//           />
//           <br />
//           <div>
//             <strong>{name}</strong>
//             <p>{email}</p>
//           </div>

//           <i
//             className="bi bi-trash text-danger"
//             style={{
//               // position: "absolute",
//               cursor: "pointer",
//               fontSize: "1.2rem",

//               // top: 20,
//               // right: 10,
//             }}
//             onClick={() => deleteContact(id)}
//           ></i>
//         </li>
//       </div>
//     </>
//   )
// }

// export default ContactCard

import React from "react"
import user from "../images/personicon.png"

const ContactCard = ({ id, name, email, deleteContact }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <img
        src={user}
        alt="User"
        style={{ borderRadius: "50%", height: 50, width: 50 }}
      />
      <div>
        <strong>{name}</strong>
        <p>{email}</p>
      </div>
      <i
        className="bi bi-trash text-danger"
        style={{ cursor: "pointer", fontSize: "1.2rem" }}
        onClick={() => deleteContact(id)} // Delete contact on click
      ></i>
    </li>
  )
}

export default ContactCard
