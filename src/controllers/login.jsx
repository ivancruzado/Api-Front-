import axios from "axios";

const baseUrl = "http://localhost:4000/api/users/login";

const login = async credentials =>{
    const response = await axios.post(baseUrl,credentials)
    return response.data
}

const emailCambio = (email) => {
    const request = axios.post("http://localhost:4000/api/users/ForgotPassword", email);
    return request.then(response => response.data);
}

const cambioContraseña = (object) => {
    const request = axios.post("http://localhost:4000/api/users/ResetPassword", object);
    return request.then(response => response.data);
}

export default{
    login,
    emailCambio,
    cambioContraseña
}