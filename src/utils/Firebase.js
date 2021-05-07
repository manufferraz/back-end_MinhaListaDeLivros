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

    async login(email, password){
            const result = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

        return result.newUser.uid;
    },
};