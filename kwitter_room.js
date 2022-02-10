var firebaseConfig = {
      apiKey: "AIzaSyCrHEptxoOU1VvIEqAGmPFTnNTRV0ZOVlo",
      authDomain: "kwitter-6321d.firebaseapp.com",
      databaseURL: "https://kwitter-6321d-default-rtdb.firebaseio.com",
      projectId: "kwitter-6321d",
      storageBucket: "kwitter-6321d.appspot.com",
      messagingSenderId: "1038504956317",
      appId: "1:1038504956317:web:1d4f6d33672c1d63769f74",
      measurementId: "G-TE594EMHC6"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome " + user_name;

function addRoom(){
      room_name=document.getElementById("room_name").value;
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
      
firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
}






function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start 
      codeconsole.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){ 
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout()
      {localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

