routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      component:'app',
      bindings: { input: "foo" },
      resolve: {
        foo: () => {
          return {
            name: 'This is AngularWebpack'
          }
        }
      }
    });

  $urlRouterProvider.otherwise('/');
}
