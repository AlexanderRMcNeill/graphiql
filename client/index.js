import React from 'react';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';

import 'graphiql/graphiql.css';
import './style.css';

const data = JSON.parse(document.getElementById('data').innerHTML);

function getUrlParam(name) {
  if(!window.location.search) return;

  // Getting the query without the ?
  const parametersString = window.location.search.substring(1);

  let params = {}
  parametersString.split('&')
    .map(function(param) {
      const splitParam = param.split('=');
      params[splitParam[0]] = splitParam[1];
    });

  return params[name];
}

function graphQLFetcher(graphQLParams) {
  const urlParam = getUrlParam('url');
  const url = urlParam ? urlParam : data.url;
  if(!url){
    throw new Error('No url defined: You can set the default url by setting GRAPHQL_SERVER_URL enviroment variable on the server.')
  }

  return fetch(url + '/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

ReactDOM.render(<GraphiQL fetcher={graphQLFetcher} />, document.getElementById('app'));