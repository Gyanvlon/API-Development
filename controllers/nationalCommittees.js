const NationalCommittee = require('../models/nationalCommittee')
exports.addNationalCommittee = (req, res, next) => {
    NationalCommittee.create({
        name: req.body.name,
        gender: req.body.gender,
        contactNo:req.body.contactNo,
        email: req.body.email,
        position: req.body.position,
        officeName: req.body.officeName,
        officeAddress: req.body.officeAddress,
        officeContactNo: req.body.officeContactNo,
        officeEmail: req.body.officeEmail,
        officeWebsite:req.body.officeWebsite,
        officeFaxNo:req.body.officeFaxNo,
        estabilishedDate:req.body.estabilishedDate
      })
      .then(result => {
        res.status(201).json({
          message:"National committee record created successfully",
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
  exports.getNationalCommittees = (req, res, next) => {
    NationalCommittee.findAll()
      .then(result => {
        res.status(201).json({
          message:"All national committee records fetch successfully",
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
  exports.getNationalCommittee = (req, res, next) => {
      let id = req.params.nationalCommitteeId
      NationalCommittee.findByPk(id)
      .then(result => {
        res.status(201).json({
          message:"National committee records fetch successfully",
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
 exports.deleteNationalCommittee = (req, res, next) => {
   let id = req.params.nationalCommitteeId
   NationalCommittee.findByPk(id)
   .then(result => {
    result.destroy().then(data =>{
     res.status(201).json({
      message:"National committee record delete sucessfully", 
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

exports.updateNationalCommittee = (req, res, next) => {
    let id = req.params.nationalCommitteeId
    NationalCommittee.findByPk(id)
     .then(result => {
       result.update({name: req.body.name,
        gender: req.body.gender,
        contactNo:req.body.contactNo,
        email: req.body.email,
        position: req.body.position,
        officeName: req.body.officeName,
        officeAddress: req.body.officeAddress,
        officeContactNo: req.body.officeContactNo,
        officeEmail: req.body.officeEmail,
        officeWebsite:req.body.officeWebsite,
        officeFaxNo:req.body.officeFaxNo,
        estabilishedDate:req.body.estabilishedDate})
        .then(data =>{
           res.status(201).json({
            message:"National committee record update successfully", 
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