class AboutCtrl {
  constructor() {
    'ngInject';
    this.name = "AboutPage"

    this.$routerOnActivate = function(toRoute, fromRoute) {
      this.name = toRoute.params.name;
    };

    this.$routerOnDeactivate = function(toRoute, fromRoute) {
      console.log(toRoute, fromRoute);
    }
  }


}

export default AboutCtrl;
