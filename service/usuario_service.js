const usuarioRepository = require('../repository/usuario_repository');
const tokenService = require('./token_service');
const bcrypt = require('bcrypt');

function listar() {
    //retornando os dados de usuário sem a senha
    return usuarioRepository.listar().map(usuario => {
        return { id: usuario.id, email: usuario.email };
    });
}

function inserir(usuario) {
    if(usuario && usuario.email && usuario.senha){
        const hash = bcrypt.hashSync(usuario.senha, 10);
        usuario.senha = hash;
        return usuarioRepository.inserir(usuario);
    }
    else {
        throw { id: 400, msg: "Usuario sem dados corretos"}
    }
}

function buscarPorId(id) {
    let usuario = usuarioRepository.buscarPorId(id);
    if(usuario) {
        //retornando os dados de usuário sem a senha
        return { id: usuario.id, email: usuario.email };
    }
    else {
        throw { id: 404, msg: "Usuario não encontrado!" }
    }
}

function buscarPorEmail(email) {
    let usuario = usuarioRepository.buscarPorEmail(email);
    if(usuario) {
        //retornando os dados de usuário sem a senha
        return { id: usuario.id, email: usuario.email };
    }
    else {
        throw { id: 404, msg: "Usuario não encontrado!" }
    }
}

function verificarLogin(user) {
    if(user.email) {
        let usuarioCadastrado = usuarioRepository.buscarPorEmail(user.email);
        if(usuarioCadastrado) {
            if(user.senha && bcrypt.compareSync(user.senha, usuarioCadastrado.senha))
            {
                const token = tokenService.criarToken({ id:usuarioCadastrado.id });
                return { token: token };
            }
        }
    }
    throw { id: 401, msg: "Email ou senha invalidos!" }

}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    buscarPorEmail,
    verificarLogin
}