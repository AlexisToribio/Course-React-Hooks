import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useMemo,
} from "react";
import {
  CharactersContainer,
  CharacterCard,
  SearchContainer,
  FavoriteContainer,
  FavoritesCharacter,
} from "./styles/Characters";
import ThemeContext from "../context/ThemeContext";

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const { darkMode } = useContext(ThemeContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // const filteredUsers = characters.filter((user) => {
  //   return user.name.toLowerCase().includes(search.toLowerCase());
  // });

  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <CharactersContainer darkMode={darkMode}>
      <FavoriteContainer darkMode={darkMode}>
        <h2>Personajes favoritos</h2>
        <FavoritesCharacter>
          {favorites.favorites.length === 0 ? (
            <p>No tiene personajes favoritos</p>
          ) : (
            favorites.favorites.map((favorite) => (
              <li key={favorite.id}>{favorite.name}</li>
            ))
          )}
        </FavoritesCharacter>
      </FavoriteContainer>

      <SearchContainer darkMode={darkMode}>
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Ingrese el nombre del personaje"
        />
      </SearchContainer>

      {filteredUsers.map((character) => (
        <CharacterCard darkMode={darkMode} key={character.id}>
          <h2>{character.name}</h2>
          <img src={character.image} alt="character" />
          <p>
            <strong>Especie:</strong> {character.species}
          </p>
          <p>
            <strong>Género:</strong> {character.gender}
          </p>
          <p>
            <strong>Estado:</strong> {character.status}
          </p>
          <p>
            <strong>Creado:</strong> {character.created}
          </p>
          <button type="button" onClick={() => handleClick(character)}>
            Agregar a Favoritos
          </button>
        </CharacterCard>
      ))}
    </CharactersContainer>
  );
}
