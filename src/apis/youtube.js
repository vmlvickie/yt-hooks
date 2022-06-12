import axios from "axios";

const KEY = 'AIzaSyCgIsca4ViFL1-snW0-YYWoz7dYTB8oMwg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});