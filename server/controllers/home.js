const { User } = require('../models')
const { compare } = require('../helpers/bcrypt')
const { createToken } = require('../helpers/jwt')
const { OAuth2Client } = require('google-auth-library');

class HomeController{
    static register(req,res,next){
        const {name,email,password} = req.body
        User.create({name,email,password})
        .then(data=>{
            res.status(201).json({msg: `${data.name} successfully register`})
        })
        .catch(err=>{
            next(err)
        })
    }
    static login(req,res,next){
        const{email,password} = req.body
        User.findOne({
            where:{
                email
            }
        })
        .then(data=>{
            // console.log(data)
            if(! data){
                // console.log('kok bisa masuk sini????????????')
                throw {msg: 'User not found', status: 400}
            } 
            else{
                const hashedPassword = compare(password,data.password)
                if(hashedPassword){
                    const token = createToken({id: data.id,email: data.email})
                    res.status(200).json({msg:`${data.name} successfully login`,token})
                }
                else{
                    throw {msg: 'Email or Password wrong',status: 400}
                }
            }
        }) 
        .catch(err=>{
            next(err)
        }) 
    }
    static googleLogin(req,res,next){
        const { id_token } = req.body

        const CLIENT_ID = process.env.GOOGLE_CLIENT_ID_KEY

        const client = new OAuth2Client(CLIENT_ID);
        let name,email
        
        client.verifyIdToken({
            idToken: id_token,
            audience: CLIENT_ID
        })
        .then(ticket=>{
            name = ticket.getPayload().name
            email = ticket.getPayload().email
            return User.findOne({
                where:{
                    email
                }
            })
        })
        .then(foundUser=>{
            if(foundUser) return foundUser
            else{
                const password = Math.random()*1000 + 'google login password random bro'
                return User.create({name,email,password})
            }
        })
        .then(data=>{
            const token = createToken({ id:data.id, email:data.email })
            res.status(200).json({token})
        })
        .catch(err=>{
            next(err)
        })
    }
}

module.exports = HomeController