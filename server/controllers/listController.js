var mongoose = require('mongoose');
var list = mongoose.model('List');

function ListController(){
  this.index = function(req,res){
    list.find({})
    .populate('_creator')
    .populate('tagged')
    .exec(function(err,result){
      if(err){
        res.json(err);
      }else{
        res.json(result);
      }
    })
  };
  this.create = function(req,res){
    list.create(req.body,function(err,result){
      if(err){
        console.log(err);
      }else{
        console.log("success creating list object",result);
        res.json(result);
      };
    });
  };
  this.find = function(req,res){
    console.log(req.params.id)
    list.findOne({_id:req.params.id},function(err,result){
      if(err){
        console.log(err)
      }else{
        console.log("found the poll object")
        res.json(result);
      };
    });
  };
  this.delete = function(req,res){
    list.remove({_id:req.params.id},function(err,result){
      if(err){
        console.log(err);
      }else{
        console.log("delete poll success");
        res.json(result);
      };
    });
  };
  this.check = function(req,res){
    list.update({_id:req.params._id},{$set:{'status':"true"}},function(err,result){
      if(err){
        console.log(err);
      }else{
        console.log(result)
      }
    })
  };
  this.uncheck = function(req,res){
    list.update({_id:req.params._id},{$set:{'status':"false"}},function(err,result){
      if(err){
        console.log(err);
      }else{
        console.log(result)
      }
    })
  }
};
module.exports = new ListController();
