export const getAccessToken = () =>{
  return sessionStorage.getItem('accessToken')  
}

export const getType = (value, body) =>{

  if(value.params)
  return {params: body}
  else if(value.query)
}