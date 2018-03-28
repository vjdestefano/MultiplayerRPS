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


database.ref().push({

  userName: userName,
  userChoice: userChoice,
  userScore: userScore,
  roundScore: roundScore,
  chatMessage: chatMessage,

});
