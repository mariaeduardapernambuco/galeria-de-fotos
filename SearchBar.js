// src/components/SearchBar.js
import React from "react";
import "./SearchBar.css";
const SearchBar = ({ filtro, setFiltro }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        placeholder="Pesquisar fotos..."
        aria-label="Pesquisar fotos"
      />
      <button className="search-button" aria-label="Buscar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M10.5 0C4.7 0 0 4.7 0 10.5S4.7 21 10.5 21 21 16.3 21 10.5 16.3 0 10.5 0zM10.5 18C7.5 18 5 15.5 5 12.5S7.5 7 10.5 7 16 9.5 16 12.5 13.5 18 10.5 18z" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
