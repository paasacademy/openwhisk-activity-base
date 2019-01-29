var request = require('request');

function main(params) {
    var name = params.name || 'Samantha';
    return {payload: 'Welcome ' + name + ' to PaaS Academy'};
}


