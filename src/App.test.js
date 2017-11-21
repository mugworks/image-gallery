import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';
import View from './View';
import Gallery from './Gallery';
import Thumbnail from './Thumbnail';
import List from './List';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders a snapshot', () => {
  const tree = renderer.create(<View/>).toJSON();
  expect(tree).toMatchSnapshot();
});


