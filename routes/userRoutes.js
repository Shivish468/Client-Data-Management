const express = require ("express")

const {home, createUser, getUsers, deleteUser, updateUser} = require("../controllers/userController.js")

const router=express.Router()
router.get("/", home)
router.post('/createUser', createUser)
router.get('/getusers', getUsers)
router.delete('/deleteuser/:id', deleteUser)
router.put('/updateuser/:id', updateUser)
module.exports = router;