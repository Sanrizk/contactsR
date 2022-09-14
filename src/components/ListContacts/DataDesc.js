import React from "react";
import { formattedDate } from "../../utils/data";

function DataDesc({ namaDepan, namaTengah, namaBelakang, dibuat, diubah, deskripsi }) {
  const createdAt = formattedDate(dibuat);
  const editAt = (diubah === '' ? 'belum diubah' : formattedDate(diubah) );
  return(
    <>
      <h3>{namaDepan + ' ' + namaTengah + ' ' + namaBelakang}</h3>
      <p>Dibuat : {createdAt} </p>
      <p>Diubah : {editAt} </p>
      <p>{deskripsi}</p>
    </>
  )
}

export default DataDesc;