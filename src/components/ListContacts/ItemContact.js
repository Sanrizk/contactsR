import React from 'react';
import ImageContact from './ImageContact';
import DescContact from './DescContact';

function ItemContact({ imageUrl, namaDepan, namaTengah, namaBelakang, dibuat, diubah, deskripsi, id, onDelete }) {
  return (
    <div id="itemContact">
      <ImageContact imageUrl={imageUrl} />
      <DescContact namaDepan={namaDepan} namaTengah={namaTengah} namaBelakang={namaBelakang} dibuat={dibuat} diubah={diubah} deskripsi={deskripsi} id={id} onDelete={onDelete} />
    </div>
  )
}

export default ItemContact;