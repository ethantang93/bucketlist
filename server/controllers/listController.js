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
    list.findOne({_id:req.params.id},function(err,result){
      if(err){
        console.log(err);
      }else{
        result.status = "1";
        result.save(function(err1,result1){
          if(err){
            console.log(err1)
          }else{
            console.log(result1)
          }
        })
      }
    })
  };
  this.uncheck = function(req,res){
    list.findOne({_id:req.params.id},function(err,result){
      if(err){
        console.log(err);
      }else{
        result.status = "0";
        result.save(function(err1,result1){
          if(err){
            console.log(err1)
          }else{
            console.log(result1)
          }
        })
      }
    })
  }
};
module.exports = new ListController();
