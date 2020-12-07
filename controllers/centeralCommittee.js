const CenteralCommittee = require('../models/centeralCommittee')
exports.addCenteralCommittee = (req, res, next) => {
    CenteralCommittee.create({
        name: req.body.name,
        gender: req.body.gender,
        contactNo:req.body.contactNo,
        email: req.body.email,
        position: req.body.position,
        ktmContactNo: req.body.ktmContactNo,
        districtContactNo: req.body.districtContactNo,
      })
      .then(result => {
        res.status(201).json({
          message:"Centeral committee record created successfully",
          data:result
        })
      })
      .catch(err=>{
        if(!err.statusCode){
          err.statusCode=500
        }
        next(err)
      });
  };
  exports.getCenteralCommittees = (req, res, next) => {
    CenteralCommittee.findAll()
      .then(result => {
        res.status(201).json({
          message:"All centeral committee records fetch successfully",
          data:result
        })
      })
      .catch(err=>{
        if(!err.statusCode){
          err.statusCode=500
        }
        next(err)
      });
  };
  exports.getCenteralCommittee = (req, res, next) => {
      let id = req.params.centeralCommitteeId
      CenteralCommittee.findByPk(id)
      .then(result => {
        res.status(201).json({
          message:"Centeral committee records fetch successfully",
          data:result
        })
      })
      .catch(err=>{
        if(!err.statusCode){
          err.statusCode=500
        }
        next(err)
      });
  };
 exports.deleteCenteralCommittee = (req, res, next) => {
   let id = req.params.centeralCommitteeId
   CenteralCommittee.findByPk(id)
   .then(result => {
    result.destroy().then(data =>{
     res.status(201).json({
      message:"centeral committee record delete sucessfully", 
      data:data
    })
    }).catch(err=>{
      if(!err.statusCode){
        err.statusCode=500
      }
      next(err)
    });
   })
   .catch(err=>{
     if(!err.statusCode){
       err.statusCode=500
     }
     next(err)
   });
};

exports.updateCenteralaCommittee = (req, res, next) => {
    let id = req.params.centeralCommitteeId
    CenteralCommittee.findByPk(id)
     .then(result => {
       result.update({
        name: req.body.name,
        gender: req.body.gender,
        contactNo:req.body.contactNo,
        email: req.body.email,
        position: req.body.position,
        ktmContactNo: req.body.ktmContactNo,
        districtContactNo: req.body.districtContactNo
       })
        .then(data =>{
           res.status(201).json({
            message:"centeral committee record update successfully", 
            data:data
          })
       })
       .catch(err=>{
         if(!err.statusCode){
           err.statusCode=500
         }
         next(err)
       })
     })
     .catch(err=>{
       if(!err.statusCode){
         err.statusCode=500
       }
       next(err)
     });
 };