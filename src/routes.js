export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('movieList', {
    url: '/movie-list/:actorId',
    component: 'movieList'
  }).state('app', {
    url: '/',
    component: 'app'
  });
}
