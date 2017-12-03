const express = require('express');
const expressGraphQL = require('express-graphql');                              // 2. Registering GraphQL with Express
const schema = require('./schema/schema');                                      // 3. Writting a GraphQL Schema
const app = express();
app.use('/graphql', expressGraphQL({                                            // 2. Registering GraphQL with Express
    schema,                                                                     // 3. Writting a GraphQL Schema    
    graphiql: true                                                              // 2. Registering GraphQL with Express
}));                                                                            // 2. Registering GraphQL with Express
app.listen(process.env.PORT,process.env.IP, () => {
   console.log('Listening...') ;
});