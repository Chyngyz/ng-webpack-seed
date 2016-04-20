import angular from 'angular'
import Router from 'ngcomponentrouter'

// Import Base styles
import '../../../assets/styles/main.scss'

const MODULE_NAME = 'app'

var app = angular.module(MODULE_NAME, [Router])


appConfig.$inject = ['$locationProvider']

function appConfig($locationProvider) {
  $locationProvider.html5Mode(false)
}

app.config(appConfig)
app.value('$routerRootComponent', 'app')
app.component('app', {
  template:require('./app.html'),
  $routeConfig: [
		{ path: '/', component: 'home', name: 'Home', useAsDefault: true },
		{ path: '/about/:name', component: 'about', name: 'About' },
		{ path: '/**', component: 'notfound', name: 'NotFound' }
	]
})

export default MODULE_NAME
