var app = angular.module("wewatch");

app.controller("UserIndexController", function($scope, $firebaseObject, $location) {
  var userRef = new Firebase("https://burning-inferno-6004.firebaseio.com/users");
  var syncObject = $firebaseObject(userRef);

  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  // It's actually saved back in the firebase database in real-time.
  syncObject.$bindTo($scope, "data");

  // userRef.push({ 'userName': 'epi' });


  // declaring this will allow me to use controller. in html
  var self = this;
  self.createUser = function (){

    var userId = $("#user-name").val();
    console.log('new user', userId);
    userRef.set({'userName': userId});
    $location.path('/room/' + roomId);
  };
  //
  // userRef.child("roomName").on('value', function (snapshot) {
  //   room = snapshot.val();
  // });
  //
  // $location.path('/room/' + room);
  // };
});
