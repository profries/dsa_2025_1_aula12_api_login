
function realizaLog(req, res, next) {
    let requestTime = Date.now();
    console.log("Rota acessada: ",req.method+" "+req.path);    
    next();
    console.log("Status de Retorno: ",res.statusCode);
    let tempoExec = Date.now() - requestTime;
    console.log("Tempo de Execução: ", tempoExec+"ms");
}

module.exports = { 
    realizaLog
}