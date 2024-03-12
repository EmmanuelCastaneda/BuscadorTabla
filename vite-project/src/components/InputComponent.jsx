import './InputComponent.css'
function InputComponent({ filterText, handleFilterChange }) {
    return (
      <div className="filter-container">
        <label htmlFor="filter">Buscador:</label>
        
        <input className='Input'
          type="text"
          id="filter"
          value={filterText}
          onChange={handleFilterChange}
          
        />
        <br />
      </div>
    );
  }