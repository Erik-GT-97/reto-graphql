const Joi = require('joi')

const ID = Joi.object().keys({
    id: Joi.number()
        .integer()
        .required()
})

const validateID = async (req, res, next) => {
    try{
       const { id } = req.body.input
       const value = await ID.validateAsync({ id })
    }
    catch(err){
        return res.status(400).json({
            "message": err.details[0].message,
            "code" : JSON.stringify(err.details[0].context.key)
        })
    }
    next()
}

module.exports = {
    validateID
}