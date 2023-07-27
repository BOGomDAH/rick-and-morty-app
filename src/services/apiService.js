import axios from "axios";

class apiService {
    // static _instance
    _API_URL = 'https://rickandmortyapi.com/api'

    // static getInstance = () => {
    //     if (!apiService._instance) {
    //         apiService._instance = new apiService()
    //     }
    //     return apiService._instance
    // }

    _get = async (method, config) => {
        try {
            const response = await axios.get(this._API_URL + method, config)
            return response
        } catch (e) {
            throw e
        }
    }

    _getMethodFromUrl = (url) => {
        return url.replace(this._API_URL, '');
    }

    _processRequests = async (urls) => {
        const promises = urls.map(async (url) => {
            try {
                const response = await axios.get(url);
                return response.data;
            } catch (e) {
                console.log(`Error fetching ${url}: ${e.message}`);
                return Promise.reject(`Error fetching episode ${url}: ${e.message}`);
            }
        });

        const results = await Promise.allSettled(promises);
        const filteredResult = await results?.filter((result) => result.status === "fulfilled").map((result) => result.value);

        return filteredResult
    }

    getAllCharacters = async (data) => {
        const response = await this._get('/character', {params: data});
        return response.data;
    }

    getAllLocations = async (data) => {
        const response = await this._get('/location', {params: data});
        return response.data;
    }

    getAllEpisodes = async (data) => {
        const response = await this._get('/episode', {params: data});
        return response.data;
    }

    getSingleCharacter = async (id) => {
        const response = await this._get(`/character/${id}`);
        const character = response.data;
        const episodeUrls = character.episode;

        character.episode = await this._processRequests(episodeUrls);

        return character;
    };

    getSingleLocation = async (id) => {
        const response = await this._get(`/location/${id}`);
        const location = response.data;
        const residentUrls = location.residents;

        location.residents = await this._processRequests(residentUrls)

        return location;
    }

    getSingleEpisode = async (id) => {
        const response = await this._get(`/episode/${id}`);
        const location = response.data;
        const residentUrls = location.characters;

        location.characters = await this._processRequests(residentUrls)

        return location;
    }

    getMoreResources = async (url) => {
        const response = await this._get(this._getMethodFromUrl(url));
        return response.data;
    }
}

const api = new apiService()
export default api;