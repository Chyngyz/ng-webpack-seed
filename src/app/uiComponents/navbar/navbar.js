export default ngModule => {
  require('./navbar.scss')
  ngModule.component('navBar', {
    template: require('./navbar.html')
  })
}
