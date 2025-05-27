const jwt = require("jsonwebtoken");

const PALAVRA_SECRETA = "Sen@c2025";

//payload -> JSON referente aos dados que quer passar no token
function criarToken(payload){
    const token = jwt.sign(payload, PALAVRA_SECRETA, { expiresIn: '1h' });
    return token;
}

module.exports = {
    criarToken
}
