import angular from 'angular'
import uirouter from 'angular-ui-router'

import config from './index.config'
import run from './index.run'
import constants from './index.constants'
import routes from './index.route'

import registerComponents from './components'

const ngModule = angular.module('app', [uirouter])

registerComponents(ngModule)

ngModule.config(config)
        .config(routes)
        .run(run)
        .constant('CONSTANTS', constants)
