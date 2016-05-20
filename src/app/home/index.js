import angular from 'angular'

import homeCtrl from './home.controller'

let homeModule = angular.module('app.home', [])

require('./home.scss')

homeModule.component('homePage', {
  controller: homeCtrl,
  template: require('./home.html')
})

export default homeModule
