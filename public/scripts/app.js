/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

angular
  .module('wewatch', ['ngRoute', 'firebase'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/templates/room-index.html',
      controllerAs: 'roomsIndexCtrl',
      controller: 'RoomsIndexController'
    })
    .when('/user', {
      templateUrl: '/views/templates/user-index.html',
      controllerAs: 'userIndexCtrl',
      controller: 'UserIndexController'
    })
    .when('/room/:roomId', {
      templateUrl: '/views/templates/room-show.html',
      controllerAs: 'roomsShowCtrl',
      controller: 'RoomsShowController'
    })
    .otherwise({
          redirectTo: '/'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
