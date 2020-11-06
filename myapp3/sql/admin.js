const db = require('./db.js')
 

const productionSchema = new db.mongoose.Schema ({
    "userName":{type:String},
    "passWord":{type:Number},
    
})

 
module.exports = db.mongoose.model("admins",productionSchema)
