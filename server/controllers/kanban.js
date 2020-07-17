const { Note } = require('../models')

class KanbanController{
    static list(req,res,next){
    Note.findAll()
    .then(data=>{
        res.status(200).json({data})
    })
    .catch(err=>{
        next(err)
    })
        
    }
    static create(req,res,next){
        const {title, category, author} = req.body
        let userId = req.userData.id
        Note.create({title,category,author,userId})
        .then(data=>{
            res.status(201).json({data})
        })
        .catch(err=>{
            next(err)
        })
    }
    static editOne(req,res,next){
        const {title, category, author} = req.body
        Note.update({title,category,author},{
            where:{
                id : req.params.id
            }
        })
        .then(data=>{
            if(!data) throw {msg: 'ERROR! Not Found', status: 404}
            else res.status(200).json({msg: 'sucessfully edit todo'})
        })
        .catch(err=>{
            next(err)
        })
    }
    static deleteOne(req,res,next){
        const id = req.params.id
        Note.destroy({
            where:{
                id
            }
        })
        .then(data=>{
            if(!data) throw {msg: 'ERROR! Not Found', status: 404}
            else res.status(200).json({msg: 'Successfully delete todo'})
        })
        .catch(err=>{
            next(err)
        })
    }
}

module.exports = KanbanController