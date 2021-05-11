const Firebase = require("../utils/Firebase");
const jwt = require("jsonwebtoken");
const UsuarioModel = require('../models/UsuarioModel');
const firebase = require("firebase/app");
require("firebase/auth");

module.exports = {
    async signIn(request , response){
        try{
            const {email , password} = request.body;
            let uid;
            try{
                uid = await Firebase.login(email,password);
            }
            catch (error){
                return response.status(403).json({notification: "Invalid credentials"});
            }
            const user = await UsuarioModel.getByFields({firebase_id: uid});
            const AcessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: "30d",
            });

            return response.status(200).json({user , AcessToken});
        }
        catch(error){
            return response.status(500).json({notification: "Error while trying to validate credentials"});
        }
    },

    async signOut(request , response){
        try{
            let message = Firebase.logout();
            return response.status(200).json({notification: message});
        }
        catch (error){
            return response.status(500).json({notification: "Could not logout due to" + error});
        }
    }
}