import React from 'react';

function Search() {
  return (
    <div id="search">
      <form id="search" className="d-flex my-3">
        <input type="text" className="form-control mx-3" placeholder="Cari disini.. !" />
      </form>
      <button className="btn btn-success">+</button>
    </div>
  )
}

export default Search;