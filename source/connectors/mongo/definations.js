const User = require('../../graphql/schema/user/model');
const Contact = require('../../graphql/schema/contact/model');

const defination = [
  {
    name: 'user',
    model: User,
    table: 'User',
  },
  {
    name: 'contact',
    model: Contact,
    table: 'Contact',
  }
];

module.exports =defination;
