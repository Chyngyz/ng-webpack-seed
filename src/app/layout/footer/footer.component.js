class AppFooterCtrl {
  constructor() {
    'ngInject';
  }
}

let AppFooter = {
  controller: AppFooterCtrl,
  template: require('./footer.html')
};

export default AppFooter;
