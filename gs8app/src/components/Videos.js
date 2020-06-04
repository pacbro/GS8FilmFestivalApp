var yourJsonAsString = '{"videos":[{"title":"bla bla","id":"no3unQcv_vg"},{"title":"blub","id":"3IHrNcJdP8s"},{"title":"abc","id":"-6v-rwoRv_4"}]}';

var ytVideos = JSON.parse(yourJsonAsString);

for (var i in ytVideos.videos) {
    var ytVideo = $("<iframe/>");
    ytVideo.attr({
        width: 560,
        height: 315,
        src: 'https://www.youtube.com/embed/' + ytVideos.videos[i].id,
        frameborder: 0
    });
    $("#ytContainer").append(ytVideo);
}