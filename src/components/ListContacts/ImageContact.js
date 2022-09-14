import React from 'react';

function ImageContact({ imageUrl }) {
  return(
    <div id="imageContact">
      <img src={imageUrl} alt="default-pict" />
    </div>
  )
}

export default ImageContact;