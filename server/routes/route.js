import pkg from 'express';
const { express } = pkg;

import { signupUser } from "../controller/user-controller.js";

const router = express.Router;

router.post('/signup',signupUser);

export default router;

//example = https://facebook.com/login -> here '/login' is API endpoint
//File is createed to hadle the endpoints
//Only for troutes
//according to endpoints in routes, we decide whic API is to be called
