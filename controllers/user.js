const bcrypt = require("bcrypt");
const User = require("../models/user");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
// const sendgridTransport = require("nodemailer-sendgrid-transport");

// const transporter = nodemailer.createTransport(
//   sendgridTransport({
//     auth: {
//       api_key:
//         "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",
//     },
//   })
// );

exports.getSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ where: { email: email } }).then((mail) => {
    if (mail) {
      console.log("here is mail", mail);
      return res.status(409).json({
        message: "Email id already exist",
        data: mail,
      });
    }
    return bcrypt.hash(password, 12).then((hashPassword) => {
      User.create({
        email: email,
        password: hashPassword,
      })
        .then((result) => {
          res.status(201).json({
            message: "User created successfully",
            data: result,
          });
        })
        .catch((err) => {
          if (!err.statusCode) {
            err.statusCode = 500;
          }
          next(err);
        });
    });
  });
};
exports.getLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ where: { email: email } })
    .then((user) => {
      if (!user) {
        res.status(409).json({
          message: "User name does not exist",
          data: user,
        });
      }
      bcrypt.compare(password, user.password).then((doMatch) => {
        if (doMatch) {
          res.status(201).json({
            message: "Log in sucessfully",
            data: doMatch,
          });
        }
        res.status(409).json({
          message: "Please Enter correct password",
          data: user.email,
        });
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
exports.getReset = (req, res, next) => {
  const email = req.body.email
  User.findOne({ where: { email: email } }).then(user => {
    console.log('here is res', user)
    if (!user) {
     return res.status(404).json({
        message: "User does not exist",
      });
    }
     crypto.randomBytes(32, (err, buffer) => {
      if (err) {
      return  res.status(409).json({
          message: "Something went wrong",
        });
      }
      const token = buffer.toString("hex");
        User.update({
          resetToken: token,
          resetTokenExpiration: Date.now() + 3600000
        }).then((result) => {
        return res.status(201).json({
            message: "Token generate successfully",
          }).catch((err) => {
            if (!err.statusCode) {
              err.statusCode = 500;
            }
            next(err);
          });
        }).catch((err) => {
          if (!err.statusCode) {
            err.statusCode = 500;
          }
          next(err);
        });
      }).catch((err) => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
    }).catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
