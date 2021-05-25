const { v4: uuidv4 } = require('uuid');

const connection = require('../database/connection');

module.exports = {

    async create(endereco , usuario_id){
        try {
        const endereco_id = uuidv4();
        endereco.endereco_id = endereco_id;
        endereco.usuario_id = usuario_id;
        await connection('endereco').insert(endereco);
        return endereco_id;
        
        } catch (error) {
            
        }
        
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
    async getAll(){
        return await connection('endereco').select("*");
    }
};