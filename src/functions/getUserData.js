import api from "../api";

 const getUserData = () => {
  try {
    if(localStorage.getItem('userData') === null){
      const fetchUserData = async() => {
      const userDataResponse = await api.get(`${api.defaults.baseURL}/users`,{
        'headers':{
          'Authorization': `Bearer ${localStorage.accessToken}`
        } 
      });
      
      // Salva os dados do usuario no local storage
      localStorage.userData = JSON.stringify(userDataResponse.data.data);

      }
      fetchUserData();

      return true;
    }
    else{
      return false;
    }
  }
  
  catch (error) {
    console.log('error: ' + error.response);
  }

    
  
}

export default getUserData
