import api from "../api";

async function getUserData() {

  const userDataResponse = await api.get(`${api.defaults.baseURL}/users`,{
    'headers':{
      'Authorization': `Bearer ${localStorage.accessToken}`
    } 
  });
  
  // Salva os dados do usuario no local storage
  localStorage.userData = JSON.stringify(userDataResponse.data.data);

  
}

export default getUserData
