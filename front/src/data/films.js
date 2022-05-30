import api from ".././services/api.js";


export default function dadosFilmes(){
    return api.get('/api/v1/filmes')
}