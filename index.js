var initializeApp = require('firebase/app').initializeApp ;
var firebase_db = require('firebase/database') ;

const firebaseConfig = { 
    apiKey: "AIzaSyDAnsBzMdKSaAOUthND3an_pCFGtPFqvBU", 
    databaseURL: "https://yamin2002.firebaseio.com", 
    projectId: "yamin2002", 
    appId: "1:835188321521:web:09faeb42b4d883ca1a0d50" 
};
initializeApp(firebaseConfig);

function writeUserData(userId, name, email, imageUrl) {
  const db = firebase_db.getDatabase();
  firebase_db.set(firebase_db.ref(db, 'users/'+ userId ), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
//writeUserData( 2 , 'ba233by' , 'koll3434a' , '343434');
const db = firebase_db.getDatabase();
firebase_db.onValue(firebase_db.ref(db, 'users' ), (snapshot) => {
    const data = snapshot.val();
    console.log(data);
})