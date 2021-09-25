import React from "react";
import { SearchContainer } from "./styles/Search";

export default function Search({
  search,
  searchInput,
  handleSearch,
  darkMode,
}) {
  return (
    <SearchContainer darkMode={darkMode}>
      <input
        type="text"
        value={search}
        ref={searchInput}
        onChange={handleSearch}
        placeholder="Ingrese el nombre del personaje"
      />
    </SearchContainer>
  );
}
