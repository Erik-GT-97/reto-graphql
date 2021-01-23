const {
    HASURA_OPERATION_DELETE_PERSON,
    HASURA_OPERATION_GET_PERSON_EXIST
} = require('../../queries/person')
const execute = require('../../utils/hasura_executor')

module.exports = function(router){
    //Request handler
    router.post('/delete_person', validateID, async (req, res) => {
    
        //get request input
        const { id } = req.body.input 

        //run some business logic
        const data_exists = await execute({id}, HASURA_OPERATION_GET_PERSON_EXIST);

        if(data_exists){
            
        }
    })
}