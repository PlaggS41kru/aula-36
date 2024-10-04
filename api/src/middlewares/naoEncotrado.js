const naoEncontrado = (req, res, next) =>{
    res.status(404).json({
        mensagem: "Recuros não encontrando",
        caminho: req.originalUrl
    });
};

module.exports = naoEncontrado;