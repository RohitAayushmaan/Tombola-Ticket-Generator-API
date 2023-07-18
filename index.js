import express from "express";
import connect from './config/db.js'
import router from './routes/postRoutes.js'
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json({limit: '50mb'}));

app.disable('x-powered-by');
const port = process.env.PORT || 8000;


// api
app.use('/', router);

app.use(function(err, req, res, next) {
    res.status(422).send({error: err.message});
});

connect()
  .then(() => {
    app.listen(port, (err) => {
      if (err) {
        throw new Error("Error in Backend server start");
      }
      console.log(`Server connected to port: ${port}`);
    });
  })
  .catch((err) => {
    throw new Error(`Invalid database connection... ${err}`);
  });



