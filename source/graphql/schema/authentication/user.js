const jwt = require('jsonwebtoken');
const { QueryTypes } = require('sequelize');
const _ = require('lodash');
const mysql = require('../../../connectors/mysql');
const mongo = require('../../../connectors/mongo');

async function getUserObject(token) {
  try {
    let arrOfUserIdUnderManager = [];
    const returnObj = {};
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const username = decodedToken.name;
    const user = await mongo.models.User.findOne({
      where: { user_name: username },
    });
    returnObj.user = user;
    if (user.user_head_id == 0) {
      //is_admin 
    }
    else if (user.id == user.user_head_id) {
      //is_manager 
      const userUnderManager = await mongo.models.User.find({user_head_id: user.id});
      arrOfUserIdUnderManager = userUnderManager.map((userUnder) => userUnder.id);
      returnObj.created_by = { id: arrOfUserIdUnderManager };
    }
    else if (user.id != user.user_head_id) {
      //is_user
      returnObj.created_by = { id: user.id };
    }
    return returnObj;
  } catch (e) {
    console.log('JWT verification error: ', e);
    throw e;
  }
}

module.exports = getUserObject;
