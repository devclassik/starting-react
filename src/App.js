// import logo from './logo.svg';
import PropTypes from "prop-types";

import "./App.css";
import pokeman from "./pokeman.json";
import { type } from "@testing-library/user-event/dist/type";
import React from "react";

const PokemonRow = ({ pokeman, onSelect }) => (
  <tr>
    <td>{pokeman.name.english}</td>
    <td>{pokeman.type.join(" , ")}</td>
    <td>{pokeman.base.HP}</td>
    <td>
      <button onClick={() => onSelect(pokeman)}>Select</button>
    </td>
  </tr>
);

const PokemonInfo = ({ name, base }) => (
  <div>
    <h1>{name.english}</h1>
    <table>
      <thead></thead>
      <tbody>
      {Object.keys(base).map((key) => (
        <tr key={key}>
          <td>{key}</td>
          <td>{base[key]}</td>
        </tr>
      ))}
      </tbody>
    </table>
  </div>
);

PokemonRow.prototype = {
  pokeman: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string.isRequired,
    }),
    type: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
  onSelect: PropTypes.func.isRequired,
};

PokemonInfo.prototype = {
  name: PropTypes.shape({
    english: PropTypes.string,
  }),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    "Sp. Attack": PropTypes.number.isRequired,
    "Sp. Defense": PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
};

function App() {
  const [filter, filterSet] = React.useState("");
  const [selectedItem, selectedItemSet] = React.useState(null);
  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem",
      }}
    >
      <h1 className="title"> Pokeman Search</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "70% 30%",
          gridColumnGap: "1rem",
        }}
      >
        <div>
          <input
            placeholder="Search..."
            value={filter}
            onChange={(evt) => filterSet(evt.target.value)}
          />
          <table width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>base</th>
              </tr>
            </thead>
            <tbody>
              {pokeman
                .filter((pokeman) =>
                  pokeman.name.english
                    .toLocaleLowerCase()
                    .includes(filter.toLocaleLowerCase())
                )
                .slice(0, 20)
                .map((pokeman) => (
                  <PokemonRow
                    pokeman={pokeman}
                    key={pokeman.id}
                    onSelect={(pokeman) => selectedItemSet(pokeman)}
                  />
                ))}
            </tbody>
          </table>
        </div>
        {selectedItem && <PokemonInfo {...selectedItem} />}
      </div>
    </div>
  );
}

export default App;
