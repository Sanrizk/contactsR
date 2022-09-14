import React from "react";

class AddContact extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      namaDepan: '',
      namaTengah: '',
      namaBelakang: '',
      deskripsi: '',
      noHandphone: '',
      instagram: '',
      facebook: '',
      email: ''
    }

    this.onNamaDepanChangeEventHandler = this.onNamaDepanChangeEventHandler.bind(this);
    this.onNamaTengahChangeEventHandler = this.onNamaTengahChangeEventHandler.bind(this);
    this.onNamaBelakangChangeEventHandler = this.onNamaBelakangChangeEventHandler.bind(this);
    this.onDeskripsiChangeEventHandler = this.onDeskripsiChangeEventHandler.bind(this);
    this.onNoHandphoneChangeEventHandler = this.onNoHandphoneChangeEventHandler.bind(this);
    this.onInstagramChangeEventHandler = this.onInstagramChangeEventHandler.bind(this);
    this.onFacebookChangeEventHandler = this.onFacebookChangeEventHandler.bind(this);
    this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }
  
  onNamaDepanChangeEventHandler(event){
    this.setState(() => {
      return {
        namaDepan: event.target.value,
      }
    })
  }

  onNamaTengahChangeEventHandler(event){
    this.setState(() => {
      return {
        namaTengah: event.target.value,
      }
    })
  }

  onNamaBelakangChangeEventHandler(event){
    this.setState(() => {
      return {
        namaBelakang: event.target.value,
      }
    })
  }

  onDeskripsiChangeEventHandler(event){
    this.setState(() => {
      return {
        deskripsi: event.target.value,
      }
    })
  }

  onNoHandphoneChangeEventHandler(event){
    this.setState(() => {
      return {
        noHandphone: event.target.value,
      }
    })
  }

  onInstagramChangeEventHandler(event){
    this.setState(() => {
      return {
        instagram: event.target.value,
      }
    })
  }

  onFacebookChangeEventHandler(event){
    this.setState(() => {
      return {
        facebook: event.target.value,
      }
    })
  }

  onEmailChangeEventHandler(event){
    this.setState(() => {
      return {
        email: event.target.value,
      }
    })
  }

  onSubmitEventHandler(event){
    event.preventDefault();
    this.props.addContact(this.state);
  }

  render(){
    return(
      <div id="adding">
        <h3>Tambah Kontak</h3>
        <form id="addContact" onSubmit={this.onSubmitEventHandler} >
          <div id="identity">
            <label>Nama Depan <span className="requiredStar">*</span></label>
            <input type="text" value={this.state.namaDepan} onChange={this.onNamaDepanChangeEventHandler} required />
            <label>Nama Tengah</label>
            <input type="text" value={this.state.namaTengah} onChange={this.onNamaTengahChangeEventHandler} />
            <label>Nama Belakang <span className="requiredStar">*</span></label>
            <input type="text" value={this.state.namaBelakang} onChange={this.onNamaBelakangChangeEventHandler} required />
            <label>Deskripsi</label>
            <input type="text" value={this.state.deskripsi} onChange={this.onDeskripsiChangeEventHandler} />
          </div>
          <div id="contactNum">
            <label>No Handphone <span className="requiredStar">*</span></label>
            <input type="number" value={this.state.noHandphone} onChange={this.onNoHandphoneChangeEventHandler} required />
            <label>Instagram</label>
            <input type="text" value={this.state.instagram} onChange={this.onInstagramChangeEventHandler} />
            <label>Facebook</label>
            <input type="text" value={this.state.facebook} onChange={this.onFacebookChangeEventHandler} />
            <label>Email</label>
            <input type="text" value={this.state.email} onChange={this.onEmailChangeEventHandler} />
            <div>
              <button type="submit">Tambah Data</button>
            </div>
          </div>
        </form>
      </div>      
    )
  }
}

// function AddContact() {
//   return(
//     <>
//       <form id="addContact">
//         <div id="identity">
//           <label>Nama Depan</label>
//           <input />
//           <label>Nama Tengah</label>
//           <input />
//           <label>Nama Belakang</label>
//           <input />
//           <label>Deskripsi</label>
//           <input />
//         </div>
//         <div id="contactNum">
//           <label>No Handphone</label>
//           <input />
//           <label>Instagram</label>
//           <input />
//           <label>Facebook</label>
//           <input />
//           <label>Email</label>
//           <input />
//           <div>
//             <button>Tambah Data</button>

//           </div>
//         </div>
//       </form>
//     </>
//   )
// }

export default AddContact;