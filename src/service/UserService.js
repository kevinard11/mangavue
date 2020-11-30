import axios from 'axios';

const BASE_URL = 'http://localhost:8081';
const USER_URL = `${BASE_URL}/user`;

class HelloService{
    getAllUser(){
        return axios.get(`${USER_URL}`);
    }
    getUser(id){
        return axios.get(`${USER_URL}/${id}`)
    }
}

export default new HelloService();