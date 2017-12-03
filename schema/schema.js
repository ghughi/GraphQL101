const graphql = require('graphql');                                             // 3. Writting a GraphQL Schema
const _ = require('lodash');                                                    // 3. Writting a GraphQL Schema

const {                                                                         // 3. Writting a GraphQL Schema
    GraphQLObjectType,                                                          // 3. Writting a GraphQL Schema
    GraphQLString,                                                              // 3. Writting a GraphQL Schema
    GraphQLInt,                                                                 // 3. Writting a GraphQL Schema
    GraphQLSchema                                                               // 3. Writting a GraphQL Schema
} = graphql;                                                                    // 3. Writting a GraphQL Schema

const users = [                                                                 // 3. Writting a GraphQL Schema
    { id: '23', firstName: 'Bill', age: 20},                                    // 3. Writting a GraphQL Schema
    {id: '47', firstName: 'Samanatha', age: 21}                                 // 3. Writting a GraphQL Schema
];                                                                              // 3. Writting a GraphQL Schema    

const UserType = new GraphQLObjectType({                                        // 3. Writting a GraphQL Schema
    name: 'User',                                                               // 3. Writting a GraphQL Schema
    fields: {                                                                   // 3. Writting a GraphQL Schema
        id: { type: GraphQLString },                                            // 3. Writting a GraphQL Schema
        firstName: { type: GraphQLString },                                     // 3. Writting a GraphQL Schema
        age: { type: GraphQLInt }                                               // 3. Writting a GraphQL Schema
}                                                                               // 3. Writting a GraphQL Schema    
});                                                                             // 3. Writting a GraphQL Schema

const RootQuery = new GraphQLObjectType({                                       // 3. Writting a GraphQL Schema
    name: 'RootQueryType',                                                      // 3. Writting a GraphQL Schema
    fields: {                                                                   // 3. Writting a GraphQL Schema
    user: {                                                                     // 3. Writting a GraphQL Schema
        type: UserType,                                                         // 3. Writting a GraphQL Schema
        args: { id: { type: GraphQLString }},                                   // 3. Writting a GraphQL Schema
        resolve(parentValue, args) {                                            // 3. Writting a GraphQL Schema
            return _.find(users, { id: args.id });                              // 3. Writting a GraphQL Schema
        }                                                                       // 3. Writting a GraphQL Schema
    }                                                                           // 3. Writting a GraphQL Schema
}                                                                               // 3. Writting a GraphQL Schema    
});                                                                             // 3. Writting a GraphQL Schema

module.exports = new GraphQLSchema ({                                           // 3. Writting a GraphQL Schema
    query: RootQuery                                                            // 3. Writting a GraphQL Schema
});                                                                             // 3. Writting a GraphQL Schema
 