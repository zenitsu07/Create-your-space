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

//this sevice_URLS object will be responsible to handle all api calls

export const SERVICE_URLS = {

    userLogin: { url: '/login', method: 'POST' },
    userSignup: { url: '/signup', method: 'POST' },
    getAllPosts: { url: '/posts', method: 'GET', params: true },
    getRefreshToken: { url: '/token', method: 'POST' },
    uploadFile: { url: 'file/upload', method: 'POST' },
    createPost: { url: 'create', method: 'POST' },
    deletePost: { url: 'delete', method: 'DELETE', query: true },
    getPostById: { url: 'post', method: 'GET', query: true },
    newComment: { url: '/comment/new', method: 'POST' },
    getAllComments: { url: 'comments', method: 'GET', query: true },
    deleteComment: { url: 'comment/delete', method: 'DELETE', query: true },
    updatePost: { url: 'update', method: 'PUT', query: true }
    
} 