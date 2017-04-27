import React from 'react';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';

import 'graphiql/graphiql.css';
import './style.css';

const data = JSON.parse(document.getElementById('data').innerHTML);

function graphQLFetcher(graphQLParams) {
  if(!data.url){
    throw new Error('No url defined: Please set the GRAPHQL_SERVER_URL enviroment variable on the server.')
  }

  return fetch(data.url + '/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

ReactDOM.render(<GraphiQL fetcher={graphQLFetcher} />, document.getElementById('app'));