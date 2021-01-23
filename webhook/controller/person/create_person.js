const {
    HASURA_OPERATION_CREATE_PERSON
} = require('../../queries/person')
const execute = require("../../utils/hasura_executor")

module.exports = function(router){
    //Request handler
    router.post('/create_person', async (req,res) => {

        //get request input
        const {data_person} = req.body.input

        //execute the Hasura operation
        const {data, errors} = await execute({data_person}, HASURA_OPERATION_CREATE_PERSON);

        //if Hasura operatio errors, then throw error
        if(errors){
            return res.status(400).json(errors[0])
        }

        //success
        return res.json({
            ...data
        })
    })
}