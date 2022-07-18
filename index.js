const { ApolloServer, AuthenticationError } =require('apollo-server-express');
const { createServer } =require('http');
const cors =require('cors');
const express =require('express');
const debugFactory =require('debug');
const _ =require('lodash');


require('./config');
// const mysql  =require('./source/connectors/mysql');
const mongo  =require('./source/connectors/mongo');
const schema =require('./source/graphql/schema');
const getUserObject =require('./source/graphql/schema/authentication/user');
const router =require('./route');


const debug = debugFactory('server:main');

const app = express();


app.use(express.static('public'));
app.use('*', cors());
app.use(express.json({ limit: '50mb' }));
app.use(
  express.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000,
  }),
);
app.use('/tailorodo', router());
try{
async function startApolloServer() {

const server = new ApolloServer({
  introspection: true,
  schema,
  context: async ({ req, res, connection }) => {
    const context = {};
    _.assign(context, {
      mongo,//replace mongo with sql
    });
    // return context;
    const token = req ? req.headers.authorization : null;
    try {
      console.log('getting user object from token');
      try {
        let { user, created_by } = await getUserObject(token);
        _.assign(context, { user, created_by });
        return context;
      } catch (e) {
        console.debug('token', token);
        throw new AuthenticationError(e);
      }
    } catch (e) {
      debug('context error: ', e);
      throw new AuthenticationError(e);
    }
  },
});
await server.start();
server.applyMiddleware({
  app,
  path: '/',
  cors: false,
});

const ws = createServer(app);
// server.installSubscriptionHandlers(ws);


const port = 8000;

ws.listen(port, () => {
  console.log(`🚀 Server ready at port : ${port}`);
  console.log(`GraphQL API URL: http://localhost:8000`)
  console.log(`Subscriptions URL: http://localhost:8000`)
});
}
startApolloServer();
}catch (err) {console.log(err.message);}

