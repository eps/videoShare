var app = angular.module("videoShare");
app.controller("RoomsIndexController", function($scope, $firebaseObject, $document, $location) {
  var ref = new Firebase("https://burning-inferno-6004.firebaseio.com/room");
  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  // It's actually saved back in the firebase database in real-time.
  syncObject.$bindTo($scope, "data");

  // retrieving all data in firebase at /room
  ref.on("value", function(snapshot) {
    console.log(snapshot.val());
    console.log(syncObject);

    /************************************
    *  LOOK AT ME
    ************************************/
    snapshot.forEach(function(child) {
      console.log('key', child.key());
      var roomsId = child.key();
      var childData = child.val();
      console.log(childData);
    });

  });

  $scope.enterRoom = function (){
    var roomId = $("#room-name").val();
    var newRoom = ref.push({roomName: roomId});
    var keyId = newRoom.key();
    console.log('created or joining room: ', roomId);
    // gets the key/unique id for the room
    console.log('the new key for room: ', keyId);
    console.log('getting room id?', keyId);

  // will set roomName(child) in firebase to the val of input
  };
});
