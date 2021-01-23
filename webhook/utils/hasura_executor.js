const fetch = require('node-fetch')

const execute = async (variables, query_operation) => {
    const hasura_endpoint = process.env.HASURA_GRAPHQL_ENDPOINT || 'http:/host.docker.internal:8080/v1/graphql'
    const hasura_secret = process.env.HASURA_GRAPHQL_ADMIN_SECRET || 123123

    const fetchResponse = await fetch(
        hasura_endpoint,
        {
            method: 'POST',
            headers: {
                'x-hasura-admin-secret': hasura_secret
            },
            body: JSON.stringify({
                query: query_operation,
                variables
            })
        }
    );
    const data = await fetchResponse.json()
    return data;
}

module.exports = execute
