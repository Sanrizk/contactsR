import React from 'react';

function ButtonHapus({ id, onDelete }) {
  return(
    <>
      <button className="btnHapus" onClick={() => onDelete(id)} >Hapus</button>
    </>
  )
}

export default ButtonHapus;