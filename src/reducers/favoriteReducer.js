export const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case "REMOVE_FROM_FAVORITE":
      return {
        ...state,
        favorites: [
          ...state.favorites.filter((favorite) => favorite !== action.payload),
        ],
      };

    default:
      return state;
  }
};
