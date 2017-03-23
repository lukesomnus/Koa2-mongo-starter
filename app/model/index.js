import mongoose from 'mongoose';
import dbConfig from '../config/db';


const CONNECT_URL = 'mongodb://' + dbConfig.host + '/' + dbConfig.database;

mongoose.connect(CONNECT_URL);
const connection = mongoose.connection;
connection.on('error', (err) => {
    console.error('connect err:' + err.message);
});

connection.once('open', () => {
    console.log('connect success');
})
