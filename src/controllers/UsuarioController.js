const Usuario = require("../models/Usuario");

module.exports = {
    async create(request, response){
        try {
            const newUser = request.body;

            const result = await Usuario.create(newUser);

            return response.status(200).json(result);

        } catch (error) {
            console.warn("Usuario creation failed:", error);

            return response.status(500).json({notification:"internal server error trying to create usuario"});
        }
    },

    async getById(request, response){
        try {
            const {usuario_id} = request.params;
            const newUser = request.body;

            const result = await Usuario.getById(usuario_id, newUser);
            
            if(result === 0){
                return response.status(400).json({notification:"usuario_id not found"});
            }
            
        } catch (error) {
            console.warn("Getting user failed:", error);
            return response.status(500).json({notification:"internal server error trying to get usuario"});
        }
    },

    async update(request, response){
        try {
            const {usuario_id} = request.params;
            const newUser = request.body;

            const result = await Usuario.updateById(usuario_id, newUser);

            return response.status(200).json(result);
        } catch (error) {
            console.warn("Usuario update failed:", error);
            return response.status(500).json({notification:"internal server error trying to update usuario"});
        }
    },

    async delete(request, response){
        try {
            const {usuario_id} = request.params;
            const result = await Usuario.deleteById(usuario_id, newUser);

            if(result === 0){
                return response.status(400).json({notification:"usuario_id not found"});
            }
        } catch (error) {
            console.warn("Usuario delete failed:", error);
            return response.status(500).json({notification:"internal server error trying to delete usuario"});
        }
    },
}