import React from 'react';
import DataDesc from './DataDesc';
import ButtonHapus from './ButtonHapus';
import ButtonUbah from './ButtonUbah';

function DescContact({ namaDepan, namaTengah, namaBelakang, dibuat, diubah, deskripsi, id, onDelete }) {
  return(
    <div id="descContact">
      <DataDesc namaDepan={namaDepan} namaTengah={namaTengah} namaBelakang={namaBelakang} dibuat={dibuat} diubah={diubah} deskripsi={deskripsi} />
      <ButtonUbah id={id} />
      <ButtonHapus id={id} onDelete={onDelete} />
    </div>
  )
}

export default DescContact;