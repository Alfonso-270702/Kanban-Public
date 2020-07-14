const { Note } = require('../models')

function authorization(req,res,next){
    let { id } = req.params
    Note.findByPk(id)
    .then(data=>{
        if(!data) throw ({msg: 'Todo not found',status: 400})
        else if(data.userId === req.userData.id)next()
        else throw {msg:'authorization failed', status:403}
    })
    .catch(err=>{
        next(err)
    })
}

module.exports = authorization 