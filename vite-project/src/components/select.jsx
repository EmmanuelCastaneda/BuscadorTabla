import React, { useState } from 'react';

function SelectComponent({ data, handleSelectChange }) {
  const [selectedOption, setSelectedOption] = useState('5');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    handleSelectChange(event.target.value);
  };

  return (
    <div className="select-container">
      <label htmlFor="select">Cantidad de datos a mostrar:</label>
      <select id="select" value={selectedOption} onChange={handleOptionChange}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
      
      <p>Mostrando {selectedOption} de {data.length} datos.</p>
    </div>
  );
}

export default SelectComponent;
