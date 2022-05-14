export default function dadosFilme(filmes,type){
    
    for(let i = 0; i < filmes.length; i++){
        if (filmes[i].id === type){
            return filmes[i]
        }
    }

}