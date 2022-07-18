const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLBoolean
} = require('graphql');
const GraphQLJSON =require('graphql-type-json');
const { ValidationError, Op, QueryTypes } =require('sequelize');
const CryptoJS =require('crypto-js');
const { getOauthAccessToken } =require('../utils');

const User = new GraphQLObjectType({
  name: 'User',
  description: 'This represents a User',
  fields() {
    return {
      _id: {
        type: GraphQLString,
        resolve(user) {
          return user._id;
        },
      },
      email: {
        type: GraphQLString,
        resolve(user) {
          return user.email;
        },
      },
      username: {
        type: GraphQLString,
        resolve(user) {
          return user.user_name;
        },
      },
      user_head_id: {
        type: GraphQLString,
        resolve(user) {
          return user.user_head_id;
        },
      },
      permission: {
        type: GraphQLString,
        resolve(user) {
          return user.permission;
        },
      },
    };
  },
});

module.exports = User;
