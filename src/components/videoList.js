angular.module('video-player')
.component('videoList', {
  // TODO
  bindings: {
    videos: '<',
    change: '<'
  },
  templateUrl: '/src/templates/videoList.html'

});
