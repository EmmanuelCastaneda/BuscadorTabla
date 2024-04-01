import './TableComponent.css'

function TableComponent({ data, filterText,selectedOption }) {
  const filteredData = data.filter(item => item.name.toLowerCase().includes(filterText.toLowerCase()));
  const filteredData2 = data.slice(0, parseInt(selectedOption));

  return (
    <table className="data-table">
      <thead>
        <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>Descripción</th>
            <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item)=>(
          <tr key={item.name}>
            <td>{item.ID}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>
              <button className="btn btn-primary" onClick={()=>handleClick(item)}>Editar</button>
              <button className="btn btn-danger" onClick={()=>handleDelete(item)}>Borrar</button>
            </td>
          </tr>
        ))}
        {filteredData2.map((item) =>(
          <tr key={item.name}>
          <td>{item.ID}</td>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>
            <button className="btn btn-primary" onClick={() => editar(item)}>Editar</button>
            <button className="btn btn-danger" onClick={() => borrar(item)}>Borrar</button>
          </td>
        </tr>
     
        ))}
      
      </tbody>
    </table>
  );
}

export default TableComponent;