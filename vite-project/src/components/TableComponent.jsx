import './TableComponent.css'

function TableComponent({ data, filterText }) {
  const filteredData = data.filter(item => item.name.toLowerCase().includes(filterText.toLowerCase()));

  return (
    <table className="data-table">
      <thead>
        <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item) => (
          <tr key={item.name}>
            <td>{item.ID}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableComponent;