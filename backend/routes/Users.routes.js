const express = require('express');
const router = express.Router();
const userController = require('../controllers/Users.controllers');


router.get('/',userController.getAllUsers);

router.get('/:id',userController.getUserById);

router.post('/adduser',userController.addUser);

router.delete('/deletealluser',userController.deletAllUser);

router.delete('/deleteuserbyid/:id',userController.deleteUserById);

router.put('/updateuser/:id',userController.updateUserById);

module.exports = router;
