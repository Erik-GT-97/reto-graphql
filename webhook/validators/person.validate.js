const { PersonCreate } = require('./model_request/person')

const validatePersonCreate = async (req, res , next) => {
    try{
     const value = await PersonCreate.validateAsync(req.body.input.data_person)
    }catch(err){
        console.log(err)
        return res.status(400)
        // return res.status(400).json(await )
    }
    next()
}