var config = {
  apiKey: "AIzaSyDPjcGLCRM-U4UPr9uKux0U1WV9pIV9IQI",
  authDomain: "multirps-5b508.firebaseapp.com",
  databaseURL: "https://multirps-5b508.firebaseio.com",
  projectId: "multirps-5b508",
  storageBucket: "multirps-5b508.appspot.com",
  messagingSenderId: "1054530587701"
};
firebase.initializeApp(config);

var database = firebase.database();

var userName = "";
var userChoice = "";
var userScore = "";
var roundScore = "";
var chatMessage = "";
var dateAdded = "";
var inGame = false;

function writeUserData(userId) {
  firebase.database().ref('users/' + userId).set({
    userChoice: userChoice,
    chatMessage: chatMessage,
  });
}


window.onload = function() {

  userName = Math.floor(Math.random() * 1000);
  if(userName === database.ref('users/' + userName).equalTo(userName)){
    console.log("there is a name already here");
  } else {
    writeUserData(userName);
  }

}


//dateAdded: firebase.database.ServerValue.TIMESTAMP

$(".btn-choice").on("click", function() {
  var btnChoice = $(this).text();

  //userChoice = btnChoice;
  database.ref('users/' + userName).update({
    userChoice: btnChoice
  });

  console.log(btnChoice);
});
//make sure you are specific with what you want the "this" id to call

$("#submitMessage").on("click", function() {
  var message = $("#messageCenter").val().trim();
  $("#messageCenter").val("");

 // $("#chatLog").append(message);
 database.ref('users/' + userName).update({
  chatMessage: message,
});
  
});

$("#messageCenter").on("keyup", function(event) {
  //event.preventDefault();
  if (event.key === "Enter") {
    var messageEnter = $("#messageCenter").val().trim();
    
    $("#messageCenter").val("");

    //$("#chatLog").append(messageEnter);

    database.ref('users/' + userName).update({
      chatMessage: messageEnter,
    });

  }
});

$(".btn-Q").on("click", function(event){
  inGame = true;
  database.ref('users/' + userName).update({
    QueueStatus: inGame,
  });
  database.ref('users/' + userName).once('value').then(function(snapshot) {
    var queueVal = (snapshot.val().QueueStatus);
    console.log(queueVal);
    });
    
  });
  
  

