export function getUrlParam(name) {
    // Returning if there is no query in the request
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