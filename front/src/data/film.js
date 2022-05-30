export default function dadosFilme(filmes,type){
    console.log("Type da funcao aq "+type)
    console.log(filmes)
    //console.log("primeiro filme"+filmes[0])
    for(let i = 0; i < filmes.length; i++){
        if (filmes[i].id == type){
            return filmes[i];
        }
    }
}