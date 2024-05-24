import axios from 'axios';

let api = axios.create({
    baseURL: 'https://api.twitch.tv/helix',

    headers: {
        'Client-Id': process.env.REACT_APP_CLIENT_ID,
        'Authorization': `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
    }
})

export default api