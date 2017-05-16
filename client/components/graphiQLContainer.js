import React from 'react';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';

import 'graphiql/graphiql.css';

export default class GraphiQLContainer extends React.Component {
    constructor(props) {
        super(props);

        this.graphQLFetcher = this.graphQLFetcher.bind(this);
    }

    graphQLFetcher(graphQLParams) {
        const url = `${this.props.baseUrl}/graphql`;
        const options = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(graphQLParams)
        };

        return fetch(url, options).then(response => response.json());
    }

    render() {
        const { query } = this.props;

        return (
            <GraphiQL fetcher={this.graphQLFetcher} query={query}>
                <GraphiQL.Logo>
                    <span>Graph<em>i</em>QL ~ {this.props.baseUrl || "No URL defined"}</span>
                </GraphiQL.Logo>
            </GraphiQL>
        );
    }
}