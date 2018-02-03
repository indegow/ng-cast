angular.module('video-player')
.component('videoListEntry', {
  // TODO
  bindings: {
    video: '<',
    change: '<',
    index: '<'
  },
  templateUrl: '/src/templates/videoListEntry.html'
});
