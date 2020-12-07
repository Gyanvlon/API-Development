const LocalElection2074 = require('../models/localElection2074')
exports.addLocalElection = (req, res, next) => {
    LocalElection2074.create({
        name: req.body.name,
        gender: req.body.gender,
        contactNo:req.body.contactNo,
        email: req.body.email,
        position: req.body.position,
        districtName: req.body.districtName,
        localArea: req.body.localArea
      })
      .then(result => {
        res.status(201).json({
          message:"Local Election created successfully",
          data:result})
      })
      .catch(err=>{
        if(!err.statusCode){
          err.statusCode = 500
        }
        next(err)
      });
  };
  exports.getLocalElections = (req, res, next) => {
    LocalElection2074.findAll()
      .then(result => {
        res.status(201).json({
          message:"All local Elections fetch successfully",
          data:result
          })
      })
      .catch(err=>{
        if(!err.statusCode){
          err.statusCode = 500
        }
        next(err)
      });
  };
  exports.getLocalElection = (req, res, next) => {
      let id = req.params.localElectionID
      LocalElection2074.findByPk(id)
      .then(result => {
        res.status(201).json({
          message:"Local Election fetch Successfully",
          data:result
        })
      })
      .catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
  };
 exports.deleteLocalElection = (req, res, next) => {
   let id = req.params.localElectionID
   LocalElection2074.findByPk(id)
   .then(result => {
    result.destroy().then(data =>{
     res.status(201).json({
      message:"Election Record Delete successfully" ,
      data:data
    })
    }).catch(err =>{
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
   })
   .catch(err=>{
     if(!err.statusCode){
      err.statusCode = 500
     }
     next(err)
   });
};

exports.updateLocalElection = (req, res, next) => {
    let id = req.params.localElectionID
    LocalElection2074.findByPk(id)
     .then(result => {
       result.update({name: req.body.name,
        gender: req.body.gender,
        contactNo:req.body.contactNo,
        email: req.body.email,
        position: req.body.position,
        districtName: req.body.districtName,
        localArea: req.body.localArea})
        .then(data =>{
           res.status(201).json({
             data: data,
             message:"data update successfully"
            })
       })
       .catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
       })
     })
     .catch(err=> {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
     });
 };