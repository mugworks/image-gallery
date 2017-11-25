export function addAlbum(state, addedAlbum) {
  
  return {
    ...state,
    albums: [
      ...state.albums,
      createAlbum(addedAlbum)
    ]
  };
}

const createAlbum = addedAlbum => ({
  name: addedAlbum.name
});