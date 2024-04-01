import InputComponent from './components/InputComponent';
import TableComponent from './components/TableComponent';
import SelectComponent from './components/select';
import React, { useState, useEffect } from "react";
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [selectedOption, setSelectedOption] = useState('5');

  useEffect(() => {
    
    setData([
      { ID:1,name: "Juan Pedro", description: "Se fue a su casas despues de trabajar" },
      { ID:2,name: "Maria Becerra", description: "Canta bien pero no tanto para que me guste" },
      { ID:3,name: "Higuain Maradona", description: "Inigualable como la luna" },
      { ID:4,name:"Daniela Astudillo Paz",description:"Amor a primera viasta"},
      { ID:5,name:"Restrepo Iguana",description:"Alguien quien su sacrifico fue tan grande como el amor"},
      {ID:6,name:"Camilo Angel",description:"El mas listo del curso"},
      {ID:7,name:"Alejando Balverde" ,description:"No se juega bien al futbol"},
      {ID:8,name:"Rafael Valderrama",description:"Una estrella que duro poco"},
      {ID:9,name:"Defrauncio Orgalau",description:"Queria ser Italiano pero nacio en LATAM"},
      {ID:10,name:"Walfrer Mayonesa",description:"Un sabor que no convina tanto"},
      {ID:11,name:"Samuel Eto",description:"Brillo en el Barcelona tanto como el una estrella"},
      {ID:12,name:"Fernando Alonso",description:"Gambero Ilusor "},
      {ID:13,name:"Pepa You",description:"La reyna del baile"},
      {ID:14,name:"Fererro Rocchel",description:"Tiene un gran corazón"},
      {ID:15,name:"Julian Arbol",description: "Es muy bueno juegando tenis"},
      {ID:16,name:"Gafekond Ñorfer",description: "Jogo bonito Brazil"},
      {ID:17,name:"Deftor Haora",description:"Desructor de planetas"},
      {ID:18,name:"Fidusuario Tendariano",description: "Conoce todos los secretos"},
      {ID:19,name:"Asimilia perez",description: "Sabe mucho de todo"},
      {ID:20,name:"Comoder Casialgo",description: "Este es el comodor"}
    ]);
  }, []);

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };
  const handleSelectChange = (selectedValue) => {
    setSelectedOption(selectedValue);
  };

  return (
    <div className="contenedor">
      <SelectComponent data={data} handleSelectChange={handleSelectChange}></SelectComponent>
      <InputComponent filterText={filterText} handleFilterChange={handleFilterChange}></InputComponent>
      <TableComponent data={data} filterText={filterText} selectedOption={selectedOption}></TableComponent>
      
    </div>
  );
}


export default App;