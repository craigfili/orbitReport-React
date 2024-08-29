import "./styling.css";

const Table = ({ sat }) => {
  
  let satJSX = sat.map((sat) => {
    let status = sat.operational ? "active" : "inactive";
    return(
      <tr id={sat.id}>
        <td>{sat.name}</td>
        <td>{sat.type}</td>
        <td>{sat.launchDate}</td>
        <td>{status}</td>
      </tr>
    )
  });
  return (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Type of Satelite</th>
        <th>Launch Date</th>
        <th>Status</th>
      </tr>
    </thead>
      <tbody>
        {satJSX}
      </tbody>
   </table>
  );
};

export default Table;