const CHANGE_CHARACTERS = "changeCharacters";
const CHANGE_API_DATA = "changeApiData";

export const changeCharacters = (characters) => ({
  type: CHANGE_CHARACTERS,
  characters,
});

export const changeAPIData = (data) => ({
  type: CHANGE_API_DATA, 
  data,
});

const initialState = {
  characters: [],
  apiData: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CHARACTERS:
      const { characters } = action;
      console.log("Characters have been changed");
      return { ...state, characters };

    case CHANGE_API_DATA:
        const {data} = action
        console.log(`Your new api data is ${data}`)
        return {...state, apiData: data}
    default:
      console.log("undefined action type 1");
      return state;
  }
};
