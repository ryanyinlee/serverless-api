'use strict';
const dynamoose = require('dynamoose');
const uuid = require('uuid').v4

console.log(uuid());

exports.handler = async (event) => {
    
      let body = JSON.parse(event.body);


   //   let peopleSchema = new dynamoose.Schema({
   //      id: uuid(),
   //      name: String,
   //      age: Number,
   //   });
    

   //   let People = dynamoose.model('people', peopleSchema);

  

    const response = {
        statusCode: 200,
        body: JSON.stringify(body),
    };
    return response;
};
