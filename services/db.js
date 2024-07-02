const mongoose=require('mongoose')//imported moongoose
mongoose.connect('mongodb://localhost:27017/PhoneBook')
const Contact=mongoose.model('Contact',{
    id:String,
    username:String,
    Email:String,
    address:String,
    phone:String
})
module.exports={Contact}
//create logic.js under services folder