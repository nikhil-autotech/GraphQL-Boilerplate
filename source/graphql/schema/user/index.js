const {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
} =require('graphql');
const User =require('./type');
const bcrypt = require('bcryptjs')
const jsonwebtoken = require('jsonwebtoken')

// eslint-disable-next-line import/prefer-default-export
 const user = {
  query: {
    type: new GraphQLList(User),
    args: {
      type: {
        type: GraphQLString,
      },
      _id: {
        type: GraphQLString,
      },
      user_name: {
        type: GraphQLString
      }
    },
    async resolve(root, args, context, info) {

      const userData = await context.mongo.models.User.find({
        where: { ...args },
      });
      return userData;
    },
  },
  mutation: {
    type: User,
    args: {
      type: {
        type: GraphQLString,
      },
      _id: {
        type: GraphQLString,
      },
      user_head_id: {
        type: GraphQLString,
      },
      user_name: {
        type: GraphQLString,
      },
      password: {
        type: GraphQLString,
      },
      email: {
        type: GraphQLString,
      },
      role: {
        type: GraphQLString,
      },
      permission: {
        type: GraphQLString,
      },
    },
    async resolve(root, args, context, info) {
      const transactionType = args.type;
      const roleType = args.role;
      if (transactionType == 'register') {
        if (roleType == 'admin') {
          return await context.mongo.models.User.create({
            email: args.email,
            user_name: args.user_name,
            password: await bcrypt.hash(args.password, 12),
            user_head_id: 0,
            permission: args.permission
          });
        }
        else if (roleType == 'manager') {
          let manager = await context.mongo.models.User.create({
            email: args.email,
            user_name: args.user_name,
            password: await bcrypt.hash(args.password, 12),
            permission: args.permission
          });
          await context.mongo.models.User.updateOne({ _id: manager._id },{
            user_head_id: manager._id,
          });
          return await context.mongo.models.User.findOne({ _id: manager._id  });
        }
        if (roleType == 'user') {
          console.log(context.mongo.models)
          return await context.mongo.models.User.create({
            email: args.email,
            user_name: args.user_name,
            password: await bcrypt.hash(args.password, 12),
            user_head_id: args.user_head_id ? user_head_id : null,
            permission: args.permission
          });
        }
      }
      else if (transactionType == 'update') {
        await context.mongo.models.User.updateOne({ _id: args._id },{
          email: args.email,
          user_name: args.user_name,
          password: await bcrypt.hash(args.password, 12),
          permission: args.permission,
          user_head_id: args.user_head_id ? args.user_head_id : null
        });
        return await context.mongo.models.User.findOne({ _id: args._id });
      }
      else if (transactionType == 'delete') {
        await context.mongo.models.user.deleteOne({_id: args._id});
      }
    },
  },
};
module.exports = user