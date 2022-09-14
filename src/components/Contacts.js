import React from 'react';
import ListContacts from './ListContacts/ListContacts';
// import { getData } from '../utils/data';
import AddContact from './Form/AddContact';

class Contacts extends React.Component {
  constructor(props) {
    super(props);

    // localStorage.setItem("dataContact", JSON.stringify(getData()));

    this.state = {
      contacts: JSON.parse(localStorage.getItem("dataContact"))
      // contacts: getData()
    }

    this.onAddContactHandler = this.onAddContactHandler.bind(this);
    this.onDeleteContactHandler = this.onDeleteContactHandler.bind(this);
  }

  onAddContactHandler({ namaDepan, namaTengah, namaBelakang, deskripsi, noHandphone, instagram, facebook, email }){
    this.setState((prevState) => {
      if(prevState.contacts === null){
        localStorage.setItem(
          'dataContact',
          JSON.stringify(
            [{
              id: +new Date(),
              namaDepan,
              namaTengah,
              namaBelakang,
              imageUrl: 'images/default.jpg',
              dibuat: new Date().toISOString(),
              diubah: '',
              deskripsi,
              noHandphone,
              instagram,
              facebook,
              email
            }]
          )
        )  
      }else{
        localStorage.setItem(
          'dataContact',
          JSON.stringify(
            [...prevState.contacts,
            {
              id: +new Date(),
              namaDepan,
              namaTengah,
              namaBelakang,
              imageUrl: 'images/default.jpg',
              dibuat: new Date().toISOString(),
              diubah: '',
              deskripsi,
              noHandphone,
              instagram,
              facebook,
              email
            }]
          )
        )
      }
      return {
        contacts: JSON.parse(localStorage.getItem('dataContact'))
      }
    })
  }

  onDeleteContactHandler(id){
    const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({contacts});
    localStorage.setItem('dataContact', JSON.stringify(contacts));
  }

  render(){
    return(
      <div className="main">
        <ListContacts contacts={this.state.contacts} onDelete={this.onDeleteContactHandler} />
        <AddContact addContact={this.onAddContactHandler} />
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, ipsam?</p> */}
        {/* {console.log(this.state.contacts)} */}
      </div>
    )
  }
}

export default Contacts;