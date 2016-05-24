export default ($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider, $compileProvider) => {
  'ngInject';

  $locationProvider.html5Mode(true)
  $locationProvider.hashPrefix('!')

  $httpProvider.useApplyAsync(true)

  $compileProvider.debugInfoEnabled(false)

  $stateProvider
    .state('app', {
      abstract: true,
      template: require('../layout/app-layout.html')
    });

  $urlRouterProvider.otherwise('/');
}
