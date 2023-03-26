//calling api axios intersectors

import axios from 'axios';
import { APT_NOTIFICATION_MESSAGES ,SERVICE_URLS} from '../../constance/config';


const API_URL = 'http://localhost:8000'//using local host as baseULR to axiosInstance

const axiosInstance =  axios.create({
    baseURL: API_URL,
    timeout:100000,
    headers:{
        "content-type": 'application/json'
    }
})
//hanndling the axios instance created 
//AxiosIntercetors provide a way to modify and control the requests and responses that are sent and received by the application
//interceptros.request (callbackfunction1, callbackfunction2)
console.log(axiosInstance)

axiosInstance.interceptors.request.use(
    function(config) {
        return config;
    },
    function(error){
        return Promise.reject(error)
    }

)

axiosInstance.interceptors.response.use(
      
    function(response){
        //Stor global cursor loader here
        //processign response usign another function
        return processResponse(response)
    }
    ,

    function(error){
        //Stor global cursor loader here
        return Promise.reject(processError(error));
    }


)



// /
//if succes => return (isSuccess: true, data:object)
//if failed=> return{ isFailure : true,  status:string, msg:String,code: int}
// /
const processResponse = (response) =>{
    if(response?.status=== 200){
        return {isSuccess: true, data: response.data}
    }else{
        return {
            //always check response for each key field first then pass the coresppnding value
            isFailure: true,
            status: response?.status,
            msg:response?.msg,
            code:response?.code
        }
    }
}

// /
//if succes => return (isSuccess: true, data:object)
//if failed=> return{ isFailure : true,  status:string, msg:String,code: int}
// /
const processError = (error) =>{

    if(error.response){
        //request macde and server responded with a status other than 200
        console.log('Error in Response', error.toJSON())//to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization
        return{
            isError: true,
            msg: APT_NOTIFICATION_MESSAGES.responseFailure,
            code: error.response.status
        }
    }else if(error.request) {
        //request sent but no reponse detected => connecting issues to dbms
        console.log('Error in Request', error.toJSON())//to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization
        return{
            isError: true,
            msg: APT_NOTIFICATION_MESSAGES.requestFailure,
            code: ""
        }
    }else{
        //We have to debiug code => its triggered when code has an error
        console.log('Error in NETWORK', error.toJSON())//to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization
        return{
            isError: true,
            msg: APT_NOTIFICATION_MESSAGES.networkFailure,
            code: ""
        }
    }
    
}

//when service urls are imported => we can use it and interceptors to process many api calls

//initialised an empty API object
const API = {};

//below loop will insert keys into API object with differnect request methods and urls

for(const [key,value] of Object.entries(SERVICE_URLS)){
    
    //store a fucntion to API[key]
    API[key] = (body,showUploadProgress, showDownloadProgress) =>//to show how much progress is made whene api is called
        //update the axiosInstance acco to the variables we get from response
        axiosInstance({

            method:value.method,
            url:value.url,
            data: body,
            responeType: value.responeType,

            onUploadProgress: function (progressEvent){
                if(showUploadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded*100) / progressEvent.total)
                    showUploadProgress(percentageCompleted)
                }
            },
            onDownloadProgress: function (progressEvent){
                if(showDownloadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded*100) / progressEvent.total)
                    showDownloadProgress(percentageCompleted)
                }
            },
            })

        
        // console.log(axiosInstance.arguments)
    }

export default API;
