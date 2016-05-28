var app = angular.module("wewatch", ["firebase"]);
var ref = new Firebase("https://burning-inferno-6004.firebaseio.com/room");

app.controller("roomsIndexCtrl", function($scope, $firebaseObject) {

  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  // It's actually saved back in the firebase database in real-time.
  syncObject.$bindTo($scope, "data");
  console.log('getting room', "data");
});


ref.child("roomName").on("value", function(snapshot) {
  room = snapshot.val();
  console.log('tryint o gt room', room);
});

// will set roomName(child) in firebase to the val of input
function enterRoom(){
  var roomId = $("#room-name").val();
  console.log(roomId);
  ref.set({roomName: roomId});
}
