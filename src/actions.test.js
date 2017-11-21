import { v1 } from 'uuid';
import { removeImg, addImg } from './actions';


it('remove an image by id', () => {
  let state = { 
    bunnies: [
      {
        _id: v1(),
        title: 'bunny1',
        description: 'cute',
        url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
      }, 
      {
        _id: v1(),
        title: 'bunny2',
        description: 'great',
        url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg',
      } 
    ]
  };

  const id = state.bunnies[0]._id;
  const newState = removeImg(state, id);
  expect(newState).toEqual({
    bunnies: [state.bunnies[1]]
  });
});

it('adds an image', () => {
  const state = {
    bunnies: [
      {
        _id: v1(),
        title: 'bunny1',
        description: 'cute',
        url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
      }
    ]
  };
  const newBunny = {
    _id: v1(),
    title: 'adorable bunny',
    description: 'more adorable than Elmo',
    url: 'somewhere.com'
  };
  
  const newState = addImg(state, newBunny);
  console.log('newState', newState);
  expect(newState).toHaveLength(2);
});