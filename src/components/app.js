angular.module('video-player')

.component('app', {
  // TODO
  templateUrl: '/src/templates/app.html',
  controller: function(youTube) {
    this.videos = exampleVideoData;
    this.currentVideo = this.videos[0];
    var puppyparams = {
        max: 5,
        key: 'AIzaSyBiEU74-BqjYgeKNzFqc9Yzcl2rJe4uqJo',
        query: 'puppies'
    };

    this.puppies = youTube.search(puppyparams, (x) => {x});

    this.selectVideo = (video) => {
      console.log(video);
      this.currentVideo = video;
    };

    this.handleClick = (query) => {
      var params = {
        max: 5,
        key: 'AIzaSyBiEU74-BqjYgeKNzFqc9Yzcl2rJe4uqJo',
        query: query
      };
      console.log(this.puppies);
      youTube.search(params, this.updateVideos);
    };

    this.updateVideos = (videos) => {
      this.videos = videos;
      this.currentVideo = videos[0];
    };
  }
});
