const conventionAndMahadivesan = require('../models/convention&Mahadisan')
exports.addConventionAndMahadivesan = (req, res, next) => {
    conventionAndMahadivesan.create({
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
          message:"Convention and mahadivesan record created successfully",
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
  exports.getConventionAndMahadivesans = (req, res, next) => {
    conventionAndMahadivesan.findAll()
      .then(result => {
        res.status(201).json({
          message: "All conventiona and mahadivesan fetch successfully",
          data:result
        })
      })
      .catch(err=>{
        if(!err.statusCode){
          err.statusCode= 500
        }
        next(err)
      });
  };
  exports.getConventionAndMahadivesan = (req, res, next) => {
      let id = req.params.localElectionID
      conventionAndMahadivesan.findByPk(id)
      .then(result => {
        res.status(201).json({
          message:"Convention and Mahadivesan  fetch successfully",
          data:result
        })
      })
      .catch(err=> {
        if(!err.statusCode){
          err.statusCode =500
        }
        next(err)
      });
  };
 exports.deleteConventionAndMahadivesan = (req, res, next) => {
   let id = req.params.localElectionID
   conventionAndMahadivesan.findByPk(id)
   .then(result => {
    result.destroy().then(data =>{
     res.status(201).json({
      message:"Convention and Mahadivesan record Delete successfully", 
      data:data
    })
    }).catch(err=>{
      if(!err.statusCode){
        err.statusCode = 500
      }
      next(err)
    });
   })
   .catch(err=>{
     if(!err.statusCode){
       err.statusCode = 500
     }
     next(err)
   });
};

exports.updateConventionAndMahadivesan = (req, res, next) => {
    let id = req.params.localElectionID
    conventionAndMahadivesan.findByPk(id)
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
            message:"Convention and Mahadivesan record update successfully", 
            data:data
          })
       })
       .catch(err=>{
         if(!err.statusCode){
           err.statusCode = 500
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