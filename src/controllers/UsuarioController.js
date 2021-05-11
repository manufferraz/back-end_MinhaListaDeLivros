const UsuarioModel = require("../models/UsuarioModel");
const Firebase = require("../utils/Firebase");

module.exports = {
    async create(request, response){
        try {
            const newUser = request.body;

            const uid = await Firebase.createNewUser(newUser.email, newUser.senha);

            delete newUser.password;

            newUser.firebase_id = uid;

            const result = await UsuarioModel.create(newUser);

            return response.status(200).json({user_id: result});

        } catch (error) {
            console.warn("Usuario creation failed:", error);

            return response.status(500).json({notification:"internal server error trying to create usuario"});
        }
    },

    async getByID(request, response){
        try {
            const {usuario_id} = request.params;

            const result = await UsuarioModel.getByID(usuario_id);
            
            if(result === 0){
                return response.status(400).json({notification:"usuario_id not found"});
            }

            return response.status(200).json({notification: "usuario GET operation successful"});
            
        } catch (error) {
            console.warn("Getting user failed:", error);
            return response.status(500).json({notification:"internal server error trying to get usuario"});
        }
    },

    async updateByID(request, response){
        try {
            const {usuario_id} = request.params;
            const newUser = request.body;

            await Firebase.updateUser(newUser);
            console.log("saiu");
            const result = await UsuarioModel.updateByID(usuario_id, newUser);

            return response.status(200).json({notification: "usuario updated successfully"});
        } catch (error) {
            console.warn("Usuario update failed:", error);
            return response.status(500).json({notification:"internal server error trying to update usuario"});
        }
    },

    async deleteByID(request, response){
        try {
            const {usuario_id} = request.params;
            const result = await UsuarioModel.deleteByID(usuario_id);

            if(result === 0){
                return response.status(400).json({notification:"usuario_id not found"});
            }

            return response.status(200).json({notification: "usuario deleted successfully"});
        } catch (error) {
            console.warn("Usuario delete failed:", error);
            return response.status(500).json({notification:"internal server error trying to delete usuario"});
        }
    },
}