import axios from 'axios';

const instance = axios.create({
    // .. where we make our configurations
        baseURL: 'https://najtanszapaczkaszwecja.pl'
    });

instance.defaults.headers.common['Authorization'] = 
{
    auth: {
        username: 'shovv',
        password: '$HOVV2020'
    }
};

export default instance;