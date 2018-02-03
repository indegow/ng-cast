angular.module('video-player')

.component('search', {
  // TODO
  bindings: {
    click: '<',
    dataService: '<'
  },
  templateUrl: '/src/templates/search.html',
  controller: function() {
    this.clear = () => {
      $ctrl.query = '';
    },
    this.search = (query) => {
      $ctrl.click(query);
      $ctrl.query = '';
    }
  }
});
