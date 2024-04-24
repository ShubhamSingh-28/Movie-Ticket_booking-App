const mongoose = require('mongoose');

const connectDB = async() => {
  try{
    await mongoose.connect('/bookMyShow');
    console.log('Connected to Database')}
  catch(error){
    console.log(error)}
}
module.exports = connectDB;