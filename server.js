const express = require('express');
const expressGraphQL = require('express-graphql');                              // 2. Registering GraphQL with Express 
const app = express();
app.use('/graphql', expressGraphQL({                                            // 2. Registering GraphQL with Express
    graphiql: true                                                              // 2. Registering GraphQL with Express
}));   
app.listen(process.env.PORT,process.env.IP, () => {
   console.log('Listening...') ;
});