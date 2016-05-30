var app = angular.module("wewatch");

app.controller("RoomsIndexController", function($scope, $firebaseObject, $document, $location) {
  var ref = new Firebase("https://burning-inferno-6004.firebaseio.com/room");

  $document.ready(function() {
    console.log('room index document is running');
    // ref.child("roomName").on("value", function(snapshot) {
    //   room = snapshot.val();
    // });
  });
  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  // It's actually saved back in the firebase database in real-time.
  syncObject.$bindTo($scope, "data");

  ref.child("roomName").on("value", function(snapshot) {
    room = snapshot.val();
    console.log('trying to room', room);
  });

  // will set roomName(child) in firebase to the val of input
  $scope.enterRoom = function (){
    var roomId = $("#room-name").val();
    console.log('created or joining room: ', roomId);
    ref.set({roomName: roomId});

  };
});
