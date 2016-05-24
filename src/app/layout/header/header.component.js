class AppHeaderCtrl {
  constructor() {
    'ngInject';
  }
}

require('./header.scss')

let AppHeader = {
  controller: AppHeaderCtrl,
  template: require('./header.html')
};

export default AppHeader;
