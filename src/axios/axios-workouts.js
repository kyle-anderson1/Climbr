import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://climbr-43405-default-rtdb.firebaseio.com/'
});

export default instance;
