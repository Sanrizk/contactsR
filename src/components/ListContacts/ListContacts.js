import React from 'react';
import Search from './Search';
import ListItemContact from './ListItemContact';

function ListContacts({ contacts, onDelete }) {
  return (
    <div id="listContacts">
      <Search />
      <ListItemContact contacts={contacts} onDelete={onDelete} />
    </div>
  )
}

export default ListContacts;