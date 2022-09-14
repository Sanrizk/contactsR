import React from "react";
import ItemContact from "./ItemContact";

function ListItemContact({ contacts, onDelete }) {
  if(contacts === null || contacts.length === 0){
    return (
      <div id="listItem">
        <p className="emptyContact">Data tidak ada</p>
      </div>
    )
  }else{
    return(
      <div id="listItem">
        {
          contacts.map((contact) => (
            <ItemContact key={contact.id} {...contact} onDelete={onDelete} />
          ))
        }
      </div>
    )

  }
}

export default ListItemContact;