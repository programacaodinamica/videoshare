function get_video_id(){
	return document.head.querySelector("[property~=video_id][content]").content;
}
window.location.replace(`https://youtu.be/${get_video_id()}`)