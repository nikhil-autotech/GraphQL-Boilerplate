const {
  GraphQLObjectType,
  GraphQLSchema,
} =require('graphql');

const  user  =require('./user');
const contact  =require('./contact');

// const {testSubscription2} =require('../../route')
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: 'Root query object',
    fields: (conn) => {
      return {
        users: user.query,
        contacts: contact.query,
      };
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    description: 'Mutation object',
    fields: () => {
      return {
        users: user.mutation,
        contacts: contact.mutation,
      };
    },
  })
});
 module.exports =schema;
