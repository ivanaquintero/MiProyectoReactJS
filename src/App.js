import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Containers/ItemListContainer';


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
    </div>
  );
}


export default App;
