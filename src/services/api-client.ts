import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1c844609639d4cd883855ee2f6817008'
    }
})