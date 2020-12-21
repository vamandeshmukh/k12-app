const Reducer = (state, action) => {
  switch (action.type) {
    case 'DATA_CHANGED':
      console.log('Data passed.');
      return Object.assign({}, state, { data: action.data });
    case 'VALUE_INCREASED':
      console.log('Data passed. 2');
      return Object.assign({}, state, { data: action.data });
    default:
      console.log('Default value was presented.');
      return state;
  }
}
export default Reducer;