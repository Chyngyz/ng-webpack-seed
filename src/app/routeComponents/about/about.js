import angular from 'angular'
import './about.scss'
const MODULE_NAME = 'app.about'

var app = angular.module(MODULE_NAME, [])


app.component('about', {
  template:require('./about.html'),
  controllerAs: 'vm',
  controller: function() {
    var vm = this;

    vm.$routerOnActivate = function(toRoute, fromRoute) {
      this.name = toRoute.params.name;
    };

    vm.$routerOnDeactivate = function(toRoute, fromRoute) {
      console.log(toRoute, fromRoute);
    }
  }
})

export default MODULE_NAME
