create a config.js file which handles request response through its notification messages for differennt responsee/loaders

And now create service_url object which handles the url and the method requested 
this object is called in api.js so now we can use interceptors to hadle many api service calls 


After calling service_apis in api.js
we run a for loop and create axiosIntance for each request made to SERVICE_URLS FUNCTION and push all requests to API object 

//then this API objec is exported and imported in login.js
which is used by signupUser function  to use API.userSignup to store the response made and await a Promise from this call

then we check network for if the request is logged or not in NETWORK tab 

To successfully log the requests made to browser=>
installed cors
and package body-parse => to handle post APIT requests in json 



Setting login User api from client to server using mongodb collectiosn and jwt auth token

Next steps -> a callabck function is called for the button and int that function
we creating an api call for login as userLogin in SERVICE_URLS of config.js file 

Now to auth loginUser from backend
import loginUser function from userController.js and use as
In Router.js = router.post('login',loginUser)

In userControler.js
->usefindOne to find the entered username in database using request body oibject and store the object in {user}

-> Use bcrypt compare method for passwords using await async to capture a promise response 
-> if matches use jwt token to create acccessToken 

after generating both acccessToken and refreshToken , devlelop a tokenSChema in token.js
and make its collection as
token = mongoose.model('token',tokenSchema)

Pass the refreshToken in Token to save it in instanec and save the instance then save the token with its.save() method

onec header component is setup 
We can link all the pages and LOGOUT to login route to allow logout for user

Since we rediect user for succesful login to HOME page but when refreshes the app He  should be rediected to Login page if not login yet

Thus We use isAuthenicated state for the same purpose  