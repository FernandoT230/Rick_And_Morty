import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
        myFavorites: [...state.myFavorites, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        allCharacters: state.allCharacters.filter(
          (character) => character.id !== action.payload
        ),
        myFavorites: state.myFavorites.filter(
          (character) => character.id !== action.payload
        ),
      };
    case FILTER:
      const filteredCharacters = state.allCharacters.filter(
        (character) => character.gender === action.payload
      );
      return {
        ...state,
        myFavorites: filteredCharacters,
      };
    case ORDER:
      const sortedCharacters = [...state.allCharacters].sort((a, b) =>
        action.payload === "A" ? a.id - b.id : b.id - a.id
      );
      return {
        ...state,
        myFavorites: sortedCharacters,
      };
    default:
      return state;
  }
};

export default rootReducer;
