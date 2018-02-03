angular.module('video-player')
.service('youTube', function($http) {
// TODO
	this.search = function(params, callback) {
		$http({
		  method: 'GET',
		  url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${params.max}&q=${params.query}&type=video&videoEmbeddable=true&key=${params.key}`
		}).then(function successCallback(response) {
		    // this callback will be called asynchronously
		    // when the response is available
        // console.log(response.data.items);
        console.log(response.data.items);
        callback(response.data.items);
        return response.data.items;
	  		});
	};
});