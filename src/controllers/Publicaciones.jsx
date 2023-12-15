import axios from "axios";

const baseUrl = "http://localhost:4000/api/publicaciones/";

let token = null

const setToken= newToken=>{
    token = newToken
}


const getAll = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/publicaciones");
      return response.data;
    } catch (error) {
      console.error('Error fetching publications:', error);
      return [];
    }
  };

  const getById = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/publicaciones/usuario/:idUsuario");
      return response.data;
    } catch (error) {
      console.error('Error fetching publications:', error);
      return [];
    }
  };

const create = (newObject,token) =>{
    const config = {
        headers:{
            Authorization: token
        }
    }

    const request = axios.post("http://localhost:4000/api/publicaciones/",newObject,config)
    return request.then(response => response.data)
}

const deleteP = (newObject, token) => {
  const request = axios.delete(`http://localhost:4000/api/publicaciones/delete/${newObject}`,{
    headers: {
      'x-access-token': token
    }});

  // Handling the response
  return request
    .then((response) => {
      console.log('Publication deleted successfully:', response.data);
      return response.data;
    })
    .catch((error) => {
      console.error('Error deleting publication:', error);

      if (error.response) {
        console.log('Response data:', error.response.data);
        console.log('Response status:', error.response.status);
        console.log('Response headers:', error.response.headers);
      }

      throw error; 
    });
};

const update = (id,token,newObject)=>{
    const request = axios.put("http://localhost:4000/api/publicaciones/update/",{
      Publicado:newObject,
      ID: id,
    },{
      headers: {
        'x-access-token': token
      }})
  
    return request.then(response => response.data)
}

const getServicesByUser = () => {
    return axiosInstance
      .get(`/services/user`)
      .then((response) => response.data.services)
      .catch((error) => {
        throw error;
      });
  };

  const getPubliDetails = async (publiNum) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/publicaciones/${publiNum}`);
      return response.data;
    } catch (error) {
      // Log the entire error object for detailed information
      console.error('Error fetching publication details:', error);
      
      // If available, log the response data for more insights
      if (error.response) {
        console.error('Response data:', error.response.data);
      }
  
      throw error; // Rethrow the error to be handled by the calling code
    }
  };

export default{
    getAll,create,setToken,update,getPubliDetails,deleteP
}