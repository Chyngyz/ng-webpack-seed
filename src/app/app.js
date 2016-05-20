import angular from 'angular'
import Router from 'ngcomponentrouter'

import appConfig from './config/app.config'
import appRun from './config/app.run'
import appConstants from './config/app.constants'

import './layout'
import './home'
import './about'
import './notfound'


// Import Base styles
import '../assets/styles/main.scss'


const requires = [
  Router,
  'app.layout',
  'app.home',
  'app.about',
  'app.404'
]

let appModule = angular.module('app', requires);



appModule.config(appConfig)
appModule.run(appRun)
appModule.value('$routerRootComponent', 'mainApp')
appModule.constant('CONSTANTS', appConstants)


appModule.component('mainApp', {
  template:require('./layout/app-layout.html'),
  $routeConfig: [
		{ path: '/', component: 'homePage', name: 'Home', useAsDefault: true },
		{ path: '/about/:name', component: 'aboutPage', name: 'About' },
		{ path: '/**', component: 'notFoundPage', name: 'NotFound' }
	]
})


// angular.bootstrap(document, ['app'], {
//   //strictDi: true
// });
