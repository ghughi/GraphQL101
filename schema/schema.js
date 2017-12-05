const graphql = require('graphql');                                             // 3. Writting a GraphQL Schema
//const _ = require('lodash');                                                  // 3. Writting a GraphQL Schema
const axios = require('axios');                                                 // 4. Async Resolve Getting Data From Json-Server

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

const CompanyType = new GraphQLObjectType({                                     // 5. Getting Users and Company related data
    name: 'Company',                                                            // 5. Getting Users and Company related data
    fields: {                                                                   // 5. Getting Users and Company related data
        id: { type: GraphQLString },                                            // 5. Getting Users and Company related data
        name: { type: GraphQLString },                                          // 5. Getting Users and Company related data
        description: { type: GraphQLString }                                    // 5. Getting Users and Company related data
}                                                                               // 5. Getting Users and Company related data    
});                                                                             // 5. Getting Users and Company related data

const UserType = new GraphQLObjectType({                                        // 3. Writting a GraphQL Schema
    name: 'User',                                                               // 3. Writting a GraphQL Schema
    fields: {                                                                   // 3. Writting a GraphQL Schema
        id: { type: GraphQLString },                                            // 3. Writting a GraphQL Schema
        firstName: { type: GraphQLString },                                     // 3. Writting a GraphQL Schema
        age: { type: GraphQLInt },                                              // 3. Writting a GraphQL Schema
        company: {                                                              // 5. Getting Users and Company related data
            type: CompanyType,                                                  // 5. Getting Users and Company related data
            resolve(parentValue, args) {                                        // 5. Getting Users and Company related data    
                //console.log(parentValue);                                     // 5. Getting Users and Company related data
                return axios.get(`http://${process.env.IP}:8081/companies/${parentValue.companyId}`)    // 5. Getting Users and Company related data
                    .then(resp => resp.data );                                                          // 5. Getting Users and Company related data
            }                                                                   // 5. Getting Users and Company related data
        }                                                                       // 5. Getting Users and Company related data
}                                                                               // 3. Writting a GraphQL Schema    
});                                                                             // 3. Writting a GraphQL Schema

const RootQuery = new GraphQLObjectType({                                       // 3. Writting a GraphQL Schema
    name: 'RootQueryType',                                                      // 3. Writting a GraphQL Schema
    fields: {                                                                   // 3. Writting a GraphQL Schema
    user: {                                                                     // 3. Writting a GraphQL Schema
        type: UserType,                                                         // 3. Writting a GraphQL Schema
        args: { id: { type: GraphQLString }},                                   // 3. Writting a GraphQL Schema
        resolve(parentValue, args) {                                            // 3. Writting a GraphQL Schema
            //return _.find(users, { id: args.id });                            // 3. Writting a GraphQL Schema
            return axios.get(`http://${process.env.IP}:8081/users/${args.id}`)  // 4. Async Resolve Getting Data From Json-Server
                .then(resp => resp.data );                                      // 4. Async Resolve Getting Data From Json-Server
        }                                                                       // 3. Writting a GraphQL Schema
    }                                                                           // 3. Writting a GraphQL Schema
}                                                                               // 3. Writting a GraphQL Schema    
});                                                                             // 3. Writting a GraphQL Schema

module.exports = new GraphQLSchema ({                                           // 3. Writting a GraphQL Schema
    query: RootQuery                                                            // 3. Writting a GraphQL Schema
});                                                                             // 3. Writting a GraphQL Schema
 