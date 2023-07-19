// const mysql=require('mysql2');

// const pool=mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASSWORD,

// })

// module.exports=pool.promise();

import mongoose from 'mongoose';

async function connect() {
    mongoose.set('strictQuery', true);
    const db = mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected");
    return db;
}

export default connect;
