const { v4: uuidv4 } = require('uuid');

const connection = require('../database/connection');

module.exports = {

    async create(usuario){
        console.log(usuario);
        try {
         const usuario_id = uuidv4();
        usuario.usuario_id = usuario_id;
        await connection('usuario').insert(usuario);
        return usuario_id;

        } catch (error) {
            console.error(error);
        }
        
    },

    async getByID(usuario_id){
        const result = await connection('usuario')
            .where({usuario_id})
            .select('*');

        return result;
    },

    async getByFields(fields){ 
        const result = await connection('usuario')
            .where(fields)
            .select('*');
        
        return result; 
    },

    async updateByID(usuario_id , usuario){
        const result = await connection('usuario').where({usuario_id}).update(usuario);
        return result;
    },

    async deleteByID(usuario_id){
        const result = await connection('usuario').where({usuario_id}).delete();
        return result;
    },
    async getAll(){
        const data = await connection('usuario').select("*");
        console.log(data);
    }
};