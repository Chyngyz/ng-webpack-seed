import angular from 'angular'

const MODULE_NAME = 'app.home'

var app = angular.module(MODULE_NAME, [])

require('./home.scss')

app.component('home', {
  template:require('./home.html')
})

export default MODULE_NAME
