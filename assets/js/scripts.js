function get_video_id(){
    /*let parts = window.location.href.split("/")
    let lastSegment = parts[parts.length-1]
    return lastSegment.split(".")[0]*/
	return document.head.querySelector("[property~=video][content]").content;
}
function getMeta(metaName) {
  const metas = document.getElementsByTagName('meta');

  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('name') === metaName) {
      return metas[i].getAttribute('content');
    }
  }

  return '';
}

// let video_id = get_video_id()
// console.log(video_id)
window.location.replace(`https://youtu.be/${get_video_id()}`)