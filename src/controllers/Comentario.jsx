import axios from "axios";

const getAll = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/comentarios/");
      return response.data;
    } catch (error) {
      console.error('Error fetching coments:', error);
      return [];
    }
  };



  const create = (newObject) => {
    const request = axios.post("http://localhost:4000/api/comentarios/", newObject);
    return request.then(response => response.data);
  }

  const update = (id,token,newObject)=>{

    const request = axios.put("http://localhost:4000/api/comentarios/update",{
      estado:newObject,
      ID: id,
    },{
      headers: {
        'x-access-token': token
      }})
  
    return request.then(response => response.data)}

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
    getAll,create,update,getPubliDetails
}