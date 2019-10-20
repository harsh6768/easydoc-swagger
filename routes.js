const Router=require('express').Router();
const authController=require('./authController');

Router.route('/user').post(authController.register);
Router.route('/user/login').post(authController.login);


module.exports=Router;
