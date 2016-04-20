import angular from 'angular'

import config from './index.config'
import run from './index.run'
import constants from './index.constants'

import appComponents from './uiComponents/index'
import app from './routeComponents/app/app'
import appHome from './routeComponents/home/home'
import appAbout from './routeComponents/about/about'
import app404 from './routeComponents/notfound/notfound'

angular.module('myApp', [app, appComponents, appHome, appAbout, app404])
        .config(config)
        .run(run)
        .constant('CONSTANTS', constants)
