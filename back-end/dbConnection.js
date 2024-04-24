const mongoose = require('mongoose');

const connectDB = async() => {
  try{
    await mongoose.connect('mongodb+srv://Auth:qwerty2801@next-auth.p0ecaww.mongodb.net/bookMyShow');
    console.log('Connected to Database')}
  catch(error){
    console.log(error)}
}
module.exports = connectDB;