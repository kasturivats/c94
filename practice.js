var firebaseConfig = {
    apiKey: "AIzaSyBi9UykGtlM1KT44fumdXAsv0lbzcdIzgc",
    authDomain: "chatapp-7dc9d.firebaseapp.com",
    databaseURL: "https://chatapp-7dc9d-default-rtdb.firebaseio.com",
    projectId: "chatapp-7dc9d",
    storageBucket: "chatapp-7dc9d.appspot.com",
    messagingSenderId: "674478658675",
    appId: "1:674478658675:web:ad75bb67dbe46012730606"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser()
{
user_name = document.getElementById("user_name").value;
// firebase.database.ref('/'+user_name).once('adding user');
firebase.database().ref().child(user_name).update({
purpose : "adding user"
});
}