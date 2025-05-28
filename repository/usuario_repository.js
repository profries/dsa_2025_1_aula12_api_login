let listaUsuarios = [
    { 
        id:1, 
        email: "admin@mail.com", 
        senha: "$2b$10$LDJxrPooAsmK2NP9hXV8VOwKOtZxZeNdnAAHnqdyA/sbKO9ZCairK" //Senha já com a hash
    }
];
let autoIncrement = 2;

function listar() {
    return listaUsuarios;
}

function buscarPorId(id) {
    return (listaUsuarios.find(
        function(usuario) {
            return (usuario.id == id);        
        }
    ));
}

function buscarPorEmail(email) {
    return (listaUsuarios.find(
        function(usuario) {
            return (usuario.email == email);        
        }
    ));
}


function inserir(usuario) {
    if(!usuario || !usuario.email || !usuario.senha) {
        return;
    }

    usuario.id = autoIncrement++;
    listaUsuarios.push(usuario);
    return usuario;
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    buscarPorEmail
}