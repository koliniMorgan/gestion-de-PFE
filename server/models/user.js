const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')


const Schema =mongoose.Schema

const userSchema =new Schema(
   { userName : {type:String,required:true },
    password: {type:String,required:true }

}
)
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User',userSchema)