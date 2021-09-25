import styled from "styled-components/macro";

export const SearchContainer = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;

  input {
    width: 600px;
    height: 40px;
    padding-left: 15px;
    border: none;
    border-radius: 5px;
    font-size: 0.9rem;
    font-weight: bold;
    color: ${({ darkMode }) => (darkMode ? "black" : "white")};
    background-color: ${({ darkMode }) =>
      darkMode ? "hsl(0, 0%, 92%)" : "hsl(0, 0%, 10%)"};
  }
`;
