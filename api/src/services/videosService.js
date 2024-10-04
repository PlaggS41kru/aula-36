const videosRepository = require("../repositories/videosRepository")

class videosServices {
    encontrarTodos(){
        return videosRepository.encontrarTodos();
    }

    encontrarComFiltros(filtros) {
        let videosFiltrados = videosRepository.encontrarTodos();

        if(filtro.titulo) {
            videosFiltrados =  videosFiltrados.filter((video) => 
                video.titulo.toLowerCase().includes(filtros.titulo.toLowerCase())
            );
        }

        if(filtro.descricao) {
            videosFiltrados =  videosFiltrados.filter((video) => 
                video.titulo.toLowerCase().includes(filtros.descricao.toLowerCase())
            );
        }

        return videosFiltrados;
    }
}

module.exports = new videosServices();