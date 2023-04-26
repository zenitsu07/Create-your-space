import express from 'express'

import { signupUser,loginUser } from "../controller/user-controller.js";

const router = express.Router();

//.post(endpoint, )
router.post('/signup',signupUser);
router.post('/login',loginUser);

export default router;

//example = https://facebook.com/login -> here '/login' is API endpoint
//File is createed to hadle the endpoints, Only for routes
//according to endpoints in routes, we decide whic API is to be called
