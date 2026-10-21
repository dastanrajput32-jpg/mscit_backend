import express from "express"
import {addUser,getUser,getSingleUser,deleteUser,updateUser,loginuser} from "../controller/userDataController.js"

const router = express.Router()
router.post('/api/add-user',addUser)
router.get('/api/get-user',getUser)
router.get('/api/get-singleuser/:id',getSingleUser)
router.delete('/api/get-deleteuser/:id',deleteUser)
router.put('/api/update-user/:id',updateUser)
router.post('/api/login',loginuser)
export default router
