'use strict';
const dynamoose = require('dynamoose');

exports.handler = async (event) => {
    
    // console.log(event.pathParameters);
    // console.log(event.queryStringParameters);
    // let id = event.pathParameters.id;
    
     let peopleSchema = new dynamoose.Schema({
        id: String,
        name: String,
        age: Number,
     });


     let People = dynamoose.model('people', peopleSchema);

     let returnRecord = await People.scan().exec();

    //  if (!id) {
    // returnRecord = await People.scan().exec();
    //  } else {
         
    // // query by id
    // returnRecord = await People.query('id').eq(id).exec();
    //  }
   

    const response = {
        statusCode: 200,
        body: JSON.stringify(returnRecord),
    };
    return response;
};
