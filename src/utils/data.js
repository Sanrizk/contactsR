const getData = () => ([
  {
    id: 1,
    namaDepan: 'Paul',
    namaTengah: '',
    namaBelakang: 'McCartney',
    imageUrl: 'images/default.jpg',
    dibuat: '2022-04-14T04:27:34.572Z',
    diubah: '2022-04-14T04:27:34.572Z',
    deskripsi: 'Bassist The Beatles',
    noHp: '',
    instagram: '',
    facebook: '',
    email: ''
  },
  {
    id: 2,
    namaDepan: 'John',
    namaTengah: 'Winston',
    namaBelakang: 'Lennon',
    imageUrl: 'images/default.jpg',
    dibuat: '2022-04-14T04:27:34.572Z',
    diubah: '2022-04-14T04:27:34.572Z',
    deskripsi: 'Guitarist The Beatles',
    noHp: '',
    instagram: '',
    facebook: '',
    email: ''
  }
]);

const formattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}

export { getData, formattedDate };