import angular from 'angular'

import aboutCtrl from './about.controller'

let aboutModule = angular.module('app.about', []);

require('./about.scss')

aboutModule.component('aboutPage', {
  controller: aboutCtrl,
  template: require('./about.html')
})

export default aboutModule
