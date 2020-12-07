const DistrictCommittee = require('../models/districtCommittee')
exports.addDistrictCommittee = (req, res, next) => {
    DistrictCommittee.create({
        name: req.body.name,
        gender: req.body.gender,
        contactNo:req.body.contactNo,
        email: req.body.email,
        position: req.body.position,
        regidentNo: req.body.regidentNo,
        officeContactNo: req.body.officeContactNo,
        districtName: req.body.districtName,
        codeNo:req.body.codeNo,
        kathmanduContactNo:req.body.kathmanduContactNo
         })
      .then(result => {
        res.status(201).json({
          message:"District Committee data created successfully",
          data:result
        })
      })
      .catch(err=>{
        if(!err.stausCode){
          err.stausCode=500
          }
          next(err)
      });
  };
  exports.getDistrictCommittees = (req, res, next) => {
    DistrictCommittee.findAll()
      .then(result => {
        res.staus(201).json({
          message:"All district committee fetch succcessfully",
          data:result
        })
      })
      .catch(err=>{
        if(!err.stausCode){
          err.stausCode=500
        }
        next(err)
      });
  };
  exports.getDistrictCommittee = (req, res, next) => {
      let id = req.params.nationalCommitteeId
      DistrictCommittee.findByPk(id)
      .then(result => {
        res.status(201).json({
          message:"District Committee record fetch successfully",
          data:result
        })
      })
      .catch(err=>{
        if(!err.stausCode){
          err.stausCode =500
        }
        next(err)
      });
  };
 exports.deleteDistrictCommittee = (req, res, next) => {
   let id = req.params.nationalCommitteeId
   DistrictCommittee.findByPk(id)
   .then(result => {
    result.destroy().then(data =>{
     res.status(201).json({
      message:"District committee record delete successfully", 
      data:data
    })
    }).catch(err=>{
      if(!err.stausCode){
        err.stausCode =500
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

exports.updateDistrictCommittee = (req, res, next) => {
    let id = req.params.nationalCommitteeId
    DistrictCommittee.findByPk(id)
     .then(result => {
       result.update({name: req.body.name,
        gender: req.body.gender,
        contactNo:req.body.contactNo,
        email: req.body.email,
        position: req.body.position,
        regidentNo: req.body.regidentNo,
        officeContactNo: req.body.officeContactNo,
        districtName: req.body.districtName,
        codeNo:req.body.codeNo,
        kathmanduContactNo:req.body.kathmanduContactNo})
        .then(data =>{
           res.status(201).json({
            message:"District committee record update successfully", 
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
         err.statusCode =500
       }
       next(err)
     });
 };