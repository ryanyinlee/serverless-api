'use strict';
const dynamoose = require('dynamoose');

exports.handler = async (event) => {
    
      let body = JSON.parse(event.body);


    const response = {
        statusCode: 200,
        body: JSON.stringify(body),
    };
    return response;
};
