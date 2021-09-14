import styled from "styled-components/macro";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  color: ${({ darkMode }) => (darkMode ? "black" : "white")};
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 120px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    background-color: hsl(0, 0%, 92%);

    svg {
      width: 50%;
      color: ${({ darkMode }) => (darkMode ? "white" : "black")};
    }
  }
`;
