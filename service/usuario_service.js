const usuarioRepository = require('../repository/usuario_repository')

function listar() {
    return usuarioRepository.listar();
}

function inserir(usuario) {
    if(usuario && usuario.email && usuario.senha){
        return usuarioRepository.inserir(usuario);
    }
    else {
        throw { id: 400, msg: "Usuario sem dados corretos"}
    }
}

function buscarPorId(id) {
    let usuario = usuarioRepository.buscarPorId(id);
    if(usuario) {
        return usuario;
    }
    else {
        throw { id: 404, msg: "Usuario não encontrado!" }
    }
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
}