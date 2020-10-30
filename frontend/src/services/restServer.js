import axios from 'axios';

const restServer = axios.create({
    baseURL: 'http://localhost:3001'
})

export default restServer;