// import logo from './logo.svg';
import "./App.css";
import pokeman from "./pokeman.json";

function App() {
  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem",
      }}
    >
      <h1 className="title"> Pokeman Search</h1>
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>base</th>
          </tr>
        </thead>
        <tbody>
          {pokeman.slice(0, 20).map((pokeman) => (
            <tr key={pokeman.id}>
              <td>{pokeman.name.english}</td>
              <td>{pokeman.type.join(" , " )}</td>
              <td>{pokeman.base.HP}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
