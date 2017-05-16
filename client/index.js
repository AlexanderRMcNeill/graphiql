import React from 'react';
import ReactDOM from 'react-dom';

import GraphiQLContainer from './components/graphiQLContainer';

import { getUrlParam } from './helpers/urlHelper';

import './style.css';

const data = JSON.parse(document.getElementById('data').innerHTML);
const urlParam = getUrlParam('url');
const query = getUrlParam('query');

const url = urlParam ? urlParam : data.url;

ReactDOM.render(
  <GraphiQLContainer
    baseUrl={url}
    query={query}
  />,
  document.getElementById('app')
);