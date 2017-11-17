
export function removeImg(state, _id) {
  console.log('function', state);
  console.log('function', _id);

  const index = state.bunnies.findIndex(bunny => bunny._id === _id);
  console.log('in index', index);
  if(index === -1) return state;

  const bunnies = state.bunnies.slice();
  bunnies.splice(index, 1);
  console.log('bunnies', bunnies);
  
  return {
    ...state,
    bunnies
  };
}