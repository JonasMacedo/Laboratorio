import Axios from 'axios';

const api = Axios.create({
    baseURL : "https://sujeitoprogramador.com/rn-api/?api=posts"

});

export default api;