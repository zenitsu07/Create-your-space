import express from 'express'

import { signupUser,loginUser } from "../controller/user-controller.js";
import { uploadImage, getImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js';

const router = express.Router();

//.post(endpoint, )
router.post('/signup',signupUser);
router.post('/login',loginUser);

router.get('login', async (req,res)=>{
    res.status(200).json(users)
})

//call middlware for single file upload to mongodb
router.post('/file/upload', upload.single('file') ,uploadImage)
router.get('file/:filename', getImage);
export default router;

//example = https://facebook.com/login -> here '/login' is API endpoint
//File is createed to hadle the endpoints, Only for routes
//according to endpoints in routes, we decide whic API is to be called
