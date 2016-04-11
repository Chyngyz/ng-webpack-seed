export default ngModule => {
  ngModule.component('app', {
      bindings: {
        input: '<'
      },
      template: require('./app.html'),
      controllerAs: 'vm',
      controller: function () {
        const vm = this;
        vm.greeting = vm.input.name;
      }
  })
}
