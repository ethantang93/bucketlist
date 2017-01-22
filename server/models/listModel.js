var mongoose = require('mongoose');
var ListSchema = new mongoose.Schema({
  _creator:{ type:mongoose.Schema.ObjectId, ref:'User', required:true },
  title:{ type:String, required:true },
  description:{ type:String, required:true },
  tagged:{ type:mongoose.Schema.ObjectId, ref:'User', required:true },
  status:{ type:String, default:"0"}
},{
  timestamps:true
});
mongoose.model('List',ListSchema);
