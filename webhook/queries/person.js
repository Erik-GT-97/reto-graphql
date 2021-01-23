const HASURA_OPERATION_CREATE_PERSON = `
mutation create_person($data_person: persons_insert_input!){
    insert_persons_one(object: $data_person){
        id
        created_at
    }
}
`;

const HASURA_OPERATION_GET_PERSON_EXIST = `
query get_person_by_id($id: Int!){
    persons_by_pk(id: $id){
        deleted
        name
        lastname
        address
        age
    }
}
`

const HASURA_OPERATION_DELETE_PERSON = `
mutation MyMutation($id: Int!){
    update_users_by_pk(pk_columns: {id: $id}, _set: { deleted: true}){
        id
    }
}
`