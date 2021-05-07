const { v4: uuidv4 } = require('uuid');

const connection = require('../database/connection');

module.exports = {

    async create(endereco){
        const endereco_id = uuidv4();
        endereco.endereco_id = endereco_id;
        const result = await connection('endereco').insert(endereco);
        return result;
    },

    async getByID(endereco_id){
        const result = await connection('endereco')
            .where(endereco_id)
            .select('*')
            .first();

        return result;
    },

    async updateByID(endereco_id , endereco){
        const result = await connection('endereco').where({endereco_id}).update(endereco);
        return result;
    },

    async deleteByID(endereco_id){
        const result = await connection('endereco').where({endereco_id}).delete();
        return result;
    },
};