module.exports= (err,req,res,next)=>{
    let statusCode = 500
    let errors = []
    switch (err.name) {
        case 'SequelizeValidationError':
        case 'SequelizeUniqueConstraintError':
            statusCode = 400
            err.errors.forEach(element => {
                errors.push(element.message)
            });
            break;
        case 'JsonWebTokenError':
            statusCode = 401;
            errors.push('Token invalid')
            break;
        default:
            let message = err.msg || 'Internal Server Error'
            errors.push(message)
            statusCode = err.status || statusCode
            break;
    }
    res.status(statusCode).json({errors})
}