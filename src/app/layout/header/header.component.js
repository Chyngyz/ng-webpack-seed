class AppHeaderCtrl {
  constructor() {
    'ngInject';
  }
}

let AppHeader = {
  controller: AppHeaderCtrl,
  template: require('./header.html')
};

export default AppHeader;
