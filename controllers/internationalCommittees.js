const InternationalCommittee = require('../models/internationalCommittee')
exports.addInternationalCommittee = (req, res, next) => {
    InternationalCommittee.create({
        name: req.body.name,
        gender: req.body.gender,
        contactNo:req.body.contactNo,
        email: req.body.email,
        position: req.body.position,
        officeName: req.body.officeName,
        country: req.body.country,
        officeAddress: req.body.officeAddress,
        officeContactNo: req.body.officeContactNo,
        officeEmail: req.body.officeEmail,
        officeWebsite:req.body.officeWebsite,
        officeFaxNo:req.body.officeFaxNo,
        estabilishedDate:req.body.estabilishedDate
      })
      .then(result => {
        res.status(201).json({
          message:"International Committee record created successfully",
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
  exports.getInternationalCommittees = (req, res, next) => {
    InternationalCommittee.findAll()
      .then(result => {
        res.status(201).json({
          message:"All International committee reocords fetch successfully",
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
  exports.getInternationalCommittee = (req, res, next) => {
      let id = req.params.internationalCommitteeId
    InternationalCommittee.findByPk(id)
      .then(result => {
        res.status(201).json({
          message:"International committee records fetch successfully",
          data:result})
      })
      .catch(err=>{
        if(!err.statusCode){
          err.statusCode=500
        }
        next(err)
      });
  };
 exports.deleteInternationalCommittee = (req, res, next) => {
   let id = req.params.internationalCommitteeId
   InternationalCommittee.findByPk(id)
   .then(result => {
    result.destroy().then(data =>{
     res.staus(201).json({
      message:"Inernationl committee record delete successfully", 
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
       err.statusCode =500
     }
     next(err)
   });
};

exports.updateInternationalCommittee = (req, res, next) => {
    let id = req.params.internationalCommitteeId
     InternationalCommittee.findByPk(id)
     .then(result => {
       result.update({ name: req.body.name,
        gender: req.body.gender,
        contactNo:req.body.contactNo,
        email: req.body.email,
        position: req.body.position,
        officeName: req.body.officeName,
        country: req.body.country,
        officeAddress: req.body.officeAddress,
        officeContactNo: req.body.officeContactNo,
        officeEmail: req.body.officeEmail,
        officeWebsite:req.body.officeWebsite,
        officeFaxNo:req.body.officeFaxNo,
        estabilishedDate:req.body.estabilishedDate})
        .then(data =>{
           res.status(201).json({
            message:"International committee record update successfully", 
            data:data
          })
       })
       .catch(err=>{
         if(!err.statusCode){
           err.statusCode=500;
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