import styled from "styled-components/macro";

export const CharactersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  align-content: center;
  padding-bottom: 20px;
  background-color: ${({ darkMode }) => (darkMode ? "white" : "black")};
`;

export const CharacterCard = styled.div`
  padding: 15px 10px;
  border-radius: 5px;
  background-color: ${({ darkMode }) =>
    darkMode ? "hsl(0, 0%, 92%)" : "hsl(0, 0%, 10%)"};
  color: ${({ darkMode }) => (darkMode ? "black" : "white")};

  h2 {
    margin: 0;
    margin-bottom: 8px;
  }

  img {
    border-radius: 5px;
    width: 90%;
  }

  p {
    margin-bottom: 0;
  }

  button {
    padding: 10px 15px;
    margin-top: 12px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    color: white;
    background-color: hsl(180, 100%, 10%);
  }

  button:active {
    transform: scale(0.9);
  }
`;

export const FavoriteContainer = styled.ul`
  width: 100%;
  padding: 0 50px;
  margin: 0;
  text-align: center;
  color: ${({ darkMode }) => (darkMode ? "black" : "white")};

  h2 {
    margin-bottom: 20px;
  }
`;

export const FavoritesCharacter = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  column-gap: 50px;
  width: 100%;
  height: 150px;

  li {
    text-align: left;
  }
`;
