// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAbxySjNGCieV-XaklG3I32k6KJKG9hPL8",
      authDomain: "kwitter-6ffc9.firebaseapp.com",
      databaseURL: "https://kwitter-6ffc9-default-rtdb.firebaseio.com",
      projectId: "kwitter-6ffc9",
      storageBucket: "kwitter-6ffc9.appspot.com",
      messagingSenderId: "561476059367",
      appId: "1:561476059367:web:8daedd11b99042ecae6242"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
document.getElementById("name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
      room_name= document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
