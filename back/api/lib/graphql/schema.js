'use strict';

const GraphQL = require('graphql')
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLSchema = GraphQL.GraphQLSchema;
const GraphQLList = require('graphql').GraphQLList;
const UserType = require('./userType');

const Queries = new GraphQLObjectType({
  name: 'Root',
  description: 'Root of the Schema',
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      description: 'List of users',
      resolve: function(source, args) {
        return [{
          id: "test",
          userName: "Shri Ram",
          name: "Ram",
          email: "ram@veg.me"
        }];
      }
    }
  })
});


module.exports = new GraphQLSchema({
  query: Queries,
});
