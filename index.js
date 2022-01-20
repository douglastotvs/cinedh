
const catalogo = require("./db/catalogo.json");

//Buscar filmes com callback
const buscarFilmes = (codigoBuscado) => {
    catalogo.forEach((filme, index) => {
        if (filme.codigo == codigoBuscado){
            console.log(filme.titulo + index)
        }
    })
};

//buscarFilmes(1)

const listarTodosFilmesEmCartaz = () => {

    catalogo.forEach((filme) => {
        if (filme.emCartaz) {
            console.log("===========================");
      
            console.log("Filme: " + filme.titulo);
            console.log("Está em cartaz?: " + filme.emCartaz);
            console.log("Ano de Lançamento: " + filme.anoDeLancamento);
      
            console.log("===========================")}
      
    });
  
  };
  
  listarTodosFilmesEmCartaz()