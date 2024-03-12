import InputComponent from './components/InputComponent';
import TableComponent from './components/TableComponent';
import React, { useState, useEffect } from "react";
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    
    setData([
      { ID:1,name: "Juan Pedro", description: "Se fue a su casas despues de trabajar" },
      { ID:2,name: "Maria Becerra", description: "Canta bien pero no tanto para que me guste" },
      { ID:3,name: "Higuain Maradona", description: "Inigualable como la luna" },
      { ID:4,name:"Daniela Astudillo Paz",description:"Amor a primera viasta"},
      { ID:5,name:"Restrepo Iguana",description:"Alguien quien su sacrifico fue tan grande como el amor"}
    ]);
  }, []);

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  return (
    <div className="contenedor">
      <InputComponent filterText={filterText} handleFilterChange={handleFilterChange}></InputComponent>
      <TableComponent data={data} filterText={filterText}></TableComponent>
      
    </div>
  );
};

export default App;