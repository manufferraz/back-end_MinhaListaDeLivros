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
        const user = await firebase.auth().currentUser;
        const { username , email , senha } = changes;
        
        username && (user.updateProfile({
            displayName: username,
        }));
        
        /*email && user.updateProfile({
            email: email,
        });
        console.log("saiu2");

        senha && user.updatePassword(password);
        console.log("saiu3");*/
            
        return response.json({notification: "Changes made successfully"}); 
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