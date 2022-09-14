import React from 'react';
import { createRoot } from 'react-dom/client';
import Contacts from './components/Contacts';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './dist/css/styles.css'

const root = createRoot(document.getElementById('root'));
root.render(<Contacts/>)
