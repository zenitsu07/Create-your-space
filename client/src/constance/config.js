//aAPI_NOTIFCATION_MESSAGES

export const APT_NOTIFICATION_MESSAGES = {
    loading:{
        title: 'Loading...',
        message: 'Data is being loaded, Please wait '
    }
    , success:{
        title: 'Success',
        message: 'Data successfully loaded'
    },
    responseFailure:{
        title:'Error',
        message:'an errro occurred while fetching response from server . Please try again'
    },

    requestFailure:{
        title:'Error',
        message: 'An error occurred while parsing or request data'
    },
    networkError:{
        title:'Error',
        message:'Unable to connect with the server. Please check Internet connnectivity and try again later'
    }
}

//API SERVICE CALL
//SAMPLE REQUEST
//NEED SERVICE CALL : { url:'/', method:'POST/GET/PUT/DELETE' PARAMS:  true/false}

export const SERVICE_URLS = {
    userSignup :{
        url: '/signup', method: 'POST'
    }
}