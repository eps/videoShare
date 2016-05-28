angular.module('wewatch', ['ngRoute'])
       .config(config);

////////////
// ROUTES //
////////////

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/room-index.html',/* Include the path to the index template */
      controller:  'RoomsIndexController',/* Which controller do you want the main page to use */
      controllerAs: 'roomsIndexCtrl'/* What will you call the controller in the html? */
    })

    .when('/:id', {
      templateUrl: '/templates/room-show.html',
      controller: 'RoomsShowController',
      controllerAs: 'roomsShowCtrl'
    })
    .otherwise ({
      redirectTo: '/'
    });


  // this just makes it so our URLs don't have /#/ in them.
  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
