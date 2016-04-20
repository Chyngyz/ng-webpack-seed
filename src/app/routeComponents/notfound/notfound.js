import angular from 'angular'

const MODULE_NAME = 'app.404'

var app = angular.module(MODULE_NAME, [])

app.component('notfound', {
  template:'Page not found'
})

export default MODULE_NAME
