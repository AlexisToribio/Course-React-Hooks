import React, {
  useState,
  useContext,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from "react";
import {
  CharactersContainer,
  CharacterCard,
  FavoriteContainer,
  FavoritesCharacter,
} from "./styles/Characters";
import ThemeContext from "../context/ThemeContext";
import Search from "./Search";
import useCharacters from "../hooks/useCharacters";

const initialState = {
  favorites: [],
};

const API = "https://rickandmortyapi.com/api/character/";

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
  // const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const { darkMode } = useContext(ThemeContext);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const characters = useCharacters(API);

  // useEffect(() => {
  //   fetch("https://rickandmortyapi.com/api/character/")
  //     .then((response) => response.json())
  //     .then((data) => setCharacters(data.results));
  // }, []);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  // const handleSearch = () => {
  //   setSearch(searchInput.current.value);
  // };

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

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

      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
        darkMode={darkMode}
      />

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
