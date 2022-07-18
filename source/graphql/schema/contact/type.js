const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLBoolean,
} =require('graphql');

const Contact = new GraphQLObjectType({
  name: 'Contact',
  description: 'This represents a User',
  fields() {
    return {
      id: {
        type: GraphQLInt,
        resolve(contact) {
          return contact.id;
        },
      },
      name: {
        type: GraphQLString,
        resolve(contact) {
          return contact.name;
        },
      },
      created_by:{
        type: GraphQLInt,
        resolve(contact) {
          return contact.created_by;
        },
      }
    };
  },
});

module.exports = Contact;
