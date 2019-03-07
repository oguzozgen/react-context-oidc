import React from 'react';
import { compose, withProps } from 'recompose';

const fetchMock = status => (url, options) => {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          status,
        }),
      350,
    );
  });
};

const enhance401 = compose(
    withProps(props => ({
    handleClick: e => {
      e.preventDefault();
      
        fetch('http://www.demo.url')
        .then(() => alert('fetch end'))
        .catch(e => alert(e));
    },
  })),
);

const Button401 = ({ handleClick }) => (
  <button onClick={handleClick} type="button">
    Simulate 401
  </button>
);

const Button401Enhance = enhance401(Button401);

const enhance403 = compose(
    withProps(props => ({
    handleClick: e => {
      e.preventDefault();
            fetch('http://www.demo.url')
        .then(() => alert('fetch end'))
        .catch(e => alert(e));
    },
  })),
);

const Button403 = ({ handleClick }) => (
  <button onClick={handleClick} type="button">
    Simulate 403
  </button>
);

const Button403Enhance = enhance403(Button403);

const enhanceFetch = compose(
    withProps(props => ({
    handleClick: e => {
      e.preventDefault();
      
        fetch('http://localhost:3000/')
        .then(() => alert('fetch end'))
        .catch(e => alert(e));
    },
  })),
);
const ButtonFetch = ({ handleClick }) => (
  <button onClick={handleClick} type="button">
    Simulate Fetch
  </button>
);

const ButtonFetchEnhance = enhanceFetch(ButtonFetch);

const Home = () => (
  <div>
    <h1>Home</h1>
    <p>Unprotected home page</p>
    <p>
      <Button403Enhance />
    </p>
    <p>
      <Button401Enhance />
    </p>
    <p>
      <ButtonFetchEnhance />
    </p>
  </div>
);

export default Home;
