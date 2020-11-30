import axios from 'axios';

const BASE_URL = 'http://localhost:8081';
const HELLO_URL = `${BASE_URL}/hello`;

class HelloService{
    ping(){
        return axios.get(`${HELLO_URL}`);
    }
}

export default new HelloService();