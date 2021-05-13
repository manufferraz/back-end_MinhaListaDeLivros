const { json, response } = require("express");
const firebase = require("firebase/app");
require("firebase/auth");

const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
console.log(firebaseApp);

module.exports = {
    async createNewUser(email, password){      
            const result = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);

            return result.user.uid;

    },

    async updateUser(changes){
        let erro = false;
        const user = await firebase.auth().currentUser;
        const email = changes.email;
        const senha = changes.senha;

        if(email != undefined){
            try {
                user.updateEmail(email);

            } catch (error) {
                erro = true;
                console.log(error);
            }
        }
        else{
            console.log("Email wasn't changed");
        }
        
        if(senha != undefined){
            try {
                user.updatePassword(senha);

            } catch (error) {
                erro = true;
                console.log(error);
            }
        }
        else{
            console.log("Password wasn't changed");
        }
        
        if(!erro){
            return json({notification: "Changes made successfully"}); 
        }
        return json({notification: "Errors occured while trying to make changes"}); 
    },

    async deleteUser(){
        try{
         var user = await firebase.auth().currentUser;
         const res = user.delete();
         return json({notification: "User deleted succesfully", res});
        }
        catch(error){
            console.error(error);
            return json({notification: "User not deleted"});
        }
    },

    async login(email, password){
            const result = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);

        return result.user.uid;
    },

    async logout(){
            const result = await firebase
            .auth()
            .signOut();

        return json({notification: "Logout succeeded"});
        
    },
};