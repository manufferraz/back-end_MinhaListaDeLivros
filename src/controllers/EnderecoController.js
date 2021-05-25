const EnderecoModel = require('../models/EnderecoModel');
const { getAll } = require('../models/UsuarioModel');

module.exports = {
    async create(request , response){
        try{
            const newEndereco = request.body;

            const { usuario_id } = request.params;

            const result = EnderecoModel.create(newEndereco , usuario_id);

            return response.status(200).json({endereco_id: result});
        }
        catch(error){
            console.warn("Endereco creation failed:", error);

            return response.status(500).json({
                notification: "Internal server error while trying to create Endereco",
            });
        }
    },

    async getByID(request , response){
        try{
            const { endereco_id } = request.params;

            const result = EnderecoModel.getByID(endereco_id);

            if(result === 0){
                return response.status(400).json({notification:"endereco_id not found"});
            }

            return response.status(200).json({notification: "Endereco GET operation successful"});
        }
        catch(error){
            console.warn("Endereco creation failed:", error);

            return response.status(500).json({
                notification: "Internal server error while trying to get Endereco",
            });
        }
    },

    async updateByID(request , response){
        try{
            const { endereco_id } = request.params;

            const updatedEndereco = request.body;

            const result = EnderecoModel.updateByID(endereco_id , updatedEndereco);

            return response.status(200).json({notification: "Endereco updated successfully"});
            
        }
        catch(error){
            console.warn("Endereco update failed:", error);

            return response.status(500).json({
                notification: "Internal server error while trying to update Endereco",
            });
        }
    },

    async deleteByID(request , response){
        try{
            const { endereco_id } = request.params;

            const result = EnderecoModel.deleteByID(endereco_id);

            if(result === 0){
                return response.status(400).json({notification:"endereco_id not found"});
            }

            return response.status(200).json({notification: "Endereco deleted successfully"});
        }
        catch(error){
            console.warn("Endereco creation failed:", error);

            return response.status(500).json({
                notification: "Internal server error while trying to delete Endereco",
            });
        }
    },
    async getAll(req, res){
        try {
            const result = await EnderecoModel.getAll();
            return res.status(200).json({result});
        } catch (error) {
            return res.status(500).json({error})
        }
    }
};