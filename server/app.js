const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const {graphqlHTTP} = require('express-graphql');
const mongoose = require('mongoose');
const { config } = require('dotenv'); 

const graphqlSchema = require('./graphql/schema');
const graphqlResolvers = require('./graphql/resolvers');

const app = express();

app.use(bodyparser.json({limit: '50mb'}));
app.use(bodyparser.urlencoded({limit: '50mb', extended: true}));

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphqlSchema, 
    rootValue: graphqlResolvers,
    graphiql: true,
  }),
);
 config(); //invoking the dotenv config here
 const uri = process.env.DB_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(8000, () => {
      console.log('server running');
    });
  })
  .catch(err => {
    console.log(err);
  });

mongoose.connection.on('connected', () => {
  console.log('connected to mongo yea');
});
mongoose.connection.on('error', err => {
  console.log('error', err);
});
