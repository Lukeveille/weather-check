const reducer = (state = { cityName: 'Toronto' }, action) => {
  switch (action.type) {
    case 'GET_TEMP':
      return { ...state, loading: true, callDone: true };
    case 'TEMP_RECEIVED':
      return { ...state, temp: action.json, loading: false };
    case 'CITY_NAME':
      return { ...state, cityName: action.name? action.name : 'Toronto' };
    default: return state;
  };
};

export default reducer;
