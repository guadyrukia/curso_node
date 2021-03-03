const { response } = require('express');


const usuarioGet = (req, res = response) => {

    const query = req.query;

    res.json({
        msg: 'get API - Controlador',
        query      
    });
}

const usuarioPut = (req, res = response) => {

    const id = req.params.id;
    res.json({
        msg: 'put API - Controlador',
        id      
    });
}

const usuarioPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API - Controlador',
        nombre,
        edad      
    });
}

const usuarioPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - Controlador'      
    });
}

const usuarioDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - Controlador'      
    });
}


module.exports = {
    usuarioGet, 
    usuarioPut, 
    usuarioPost, 
    usuarioPatch, 
    usuarioDelete,

}