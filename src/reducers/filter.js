const filter = (
  state={opened: 0, clicked: 0, unsubed: 0, below: false},
  action
) => {
  switch(action.type) {
    case 'UPDATE_FILTER_VALUE':
      let { name, updateValue, direction } = action;
      name = name.toLowerCase();
      let value = state[name];

      if (direction === 'up') {
        value = value + updateValue;
      } else if (direction === 'down') {
        value = value - updateValue;
      }

      return {...state, [name]: value};
    case 'UPDATE_FILTER_ORIENTATION':
      return {...state, below: !state.below}
    default:
      return state;
  }
}

export default filter
